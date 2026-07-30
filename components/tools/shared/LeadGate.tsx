"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

export interface LeadData {
  id?: string;
  name: string;
  companyName: string;
  designation: string;
  email: string;
  phone: string;
  linkedinUrl: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  designation: string;
  companyName: string;
  phone: string;
  linkedinUrl: string;
  email: string;
}

const leadSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(255),
  lastName: z.string().trim().min(1, "Last name is required").max(255),
  designation: z.string().trim().min(1, "Designation is required").max(255),
  companyName: z.string().trim().max(255).optional(),
  phone: z.string().trim().max(20).optional(),
  linkedinUrl: z.string().trim().max(2083).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255).optional().or(z.literal("")),
});

export type LeadSource = "profile_optimizer" | "posting_rhythm_builder" | "lead_magnet_ideas" | "dm_angle_generator" | "founder_presence_analyzer";

interface LeadGateProps {
  onComplete: (data: LeadData) => void;
  source: LeadSource;
  heading?: React.ReactNode;
  description?: string;
}

const SHARED_ZOHO_FORM_ACTION =
  "https://forms.zohopublic.com/flintstop/form/Myntmoreleadmagnetform/formperma/z-AuIY9K-mm72IUDW3h9bnsB3ye_AQgaIjI4xrdii1o/htmlRecords/submit";

// Each tool posts to its own Zoho form when one exists; otherwise it falls
// back to the shared lead-magnet form. Field names (SingleLine, SingleLine1,
// etc.) are consistent across these forms, so no other changes are needed
// when adding a dedicated form for a tool.
const ZOHO_FORM_ACTIONS: Record<LeadSource, string> = {
  profile_optimizer: SHARED_ZOHO_FORM_ACTION,
  posting_rhythm_builder:
    "https://forms.zohopublic.com/flintstop/form/PostingRhythm/formperma/btpD3CWLnvNwmuKABmv1eiFifirOxmMSKkD2gzzoxns/htmlRecords/submit",
  lead_magnet_ideas:
    "https://forms.zohopublic.com/flintstop/form/LeadMagnetIdeas/formperma/rGceryxx4yNK3wd1J8TlvghlR5WKKFAc8qkBec_-CZo/htmlRecords/submit",
  dm_angle_generator:
    "https://forms.zohopublic.com/flintstop/form/DMAngleGenerator/formperma/62jROMu8G-5OfsQqYL4Bfn4tL1ArsSVjbBXAJwbI4N8/htmlRecords/submit",
  founder_presence_analyzer:
    "https://forms.zohopublic.com/flintstop/form/FounderPresence/formperma/JnJcgXg8AbGtNsscKQtYvGFJs8d1HB94fIKK8xsnvAc/htmlRecords/submit",
};
const ZOHO_IFRAME_NAME = "zoho-lead-magnet-iframe";

const DEFAULT_HEADING = (
  <>
    Myntmore <span className="text-primary">LinkedIn</span> Profile Optimizer
  </>
);
const DEFAULT_DESCRIPTION = "Audit your LinkedIn profile and get specific improvements to make it work harder for you.";

const LeadGate = ({ onComplete, source, heading = DEFAULT_HEADING, description = DEFAULT_DESCRIPTION }: LeadGateProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    designation: "",
    companyName: "",
    phone: "",
    linkedinUrl: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Submit the real Zoho form in the background (hidden iframe target) so the
    // lead lands in Zoho CRM without leaving this page.
    formRef.current?.submit();

    const d = result.data;

    // Also log to our own Supabase leads table as a secondary record. The
    // returned row id lets the tool attach its inputs/outputs to this same
    // row once it has something to show.
    const [{ data: insertedLead, error }] = await Promise.all([
      supabase
        .from("leads")
        .insert([
          {
            source,
            name: `${d.firstName} ${d.lastName}`.trim(),
            email: d.email || null,
            phone: d.phone || null,
            company_name: d.companyName || null,
            linkedin_url: d.linkedinUrl || null,
            metadata: { designation: d.designation },
          },
        ])
        .select()
        .single(),
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]);

    if (error) console.error("Supabase lead insert failed:", error);

    setIsSubmitting(false);
    onComplete({
      id: insertedLead?.id,
      name: `${d.firstName} ${d.lastName}`.trim(),
      companyName: d.companyName || "",
      designation: d.designation,
      email: d.email || "",
      phone: d.phone || "",
      linkedinUrl: d.linkedinUrl || "",
    });
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in px-4 py-12">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">{heading}</h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto">{description}</p>
      </div>

      <div className="card-elevated p-8 glow-accent max-w-md mx-auto">
        <iframe name={ZOHO_IFRAME_NAME} title="zoho-lead-magnet" style={{ display: "none" }} />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action={ZOHO_FORM_ACTIONS[source]}
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          target={ZOHO_IFRAME_NAME}
          className="space-y-5"
        >
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          <div className="space-y-1.5">
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
              First Name <span className="text-primary">*</span>
            </label>
            <Input
              id="firstName"
              name="SingleLine"
              type="text"
              maxLength={255}
              placeholder="Rahul"
              value={formData.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              className={errors.firstName ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
              disabled={isSubmitting}
            />
            {errors.firstName && <p className="text-xs text-destructive">{errors.firstName}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
              Last Name <span className="text-primary">*</span>
            </label>
            <Input
              id="lastName"
              name="SingleLine1"
              type="text"
              maxLength={255}
              placeholder="Mehta"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              className={errors.lastName ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
              disabled={isSubmitting}
            />
            {errors.lastName && <p className="text-xs text-destructive">{errors.lastName}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="designation" className="block text-sm font-medium text-foreground">
              Designation <span className="text-primary">*</span>
            </label>
            <Input
              id="designation"
              name="SingleLine2"
              type="text"
              maxLength={255}
              placeholder="Head of Sales"
              value={formData.designation}
              onChange={(e) => updateField("designation", e.target.value)}
              className={errors.designation ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
              disabled={isSubmitting}
            />
            {errors.designation && <p className="text-xs text-destructive">{errors.designation}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="companyName" className="block text-sm font-medium text-foreground">
              Company
            </label>
            <Input
              id="companyName"
              name="SingleLine3"
              type="text"
              maxLength={255}
              placeholder="HireFlow"
              value={formData.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
              Phone
            </label>
            <Input
              id="phone"
              name="PhoneNumber_countrycode"
              type="text"
              maxLength={20}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="linkedinUrl" className="block text-sm font-medium text-foreground">
              LinkedIn URL
            </label>
            <Input
              id="linkedinUrl"
              name="Website"
              type="text"
              maxLength={2083}
              placeholder="https://linkedin.com/in/rahulmehta"
              value={formData.linkedinUrl}
              onChange={(e) => updateField("linkedinUrl", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="Email"
              type="text"
              maxLength={255}
              placeholder="rahul@hireflow.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={errors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <Button type="submit" variant="hero" className="w-full mt-6 rounded-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving…
              </>
            ) : (
              "Get Started →"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LeadGate;
