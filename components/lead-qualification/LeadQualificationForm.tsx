"use client";

import { useState } from "react";
import { ArrowRight, Check, Sparkles, Building2, TrendingUp, DollarSign, Users, User, Mail, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface LeadFormData {
  businessType: string;
  growthPriorities: string[];
  otherPriorityText: string;
  monthlyRevenue: string;
  companySize: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
}

interface LeadQualificationFormProps {
  onSuccess: (data: { firstName: string; lastName: string; email: string }) => void;
}

const BUSINESS_TYPES = [
  "Agency owner / Service provider",
  "B2B SaaS / Technology company",
  "Manufacturer / Industrial business",
];

const GROWTH_PRIORITIES = [
  { id: "p1", value: "Build a predictable client acquisition system", label: "Build a predictable client acquisition system" },
  { id: "p2", value: "Generate more qualified sales meetings", label: "Generate more qualified sales meetings" },
  { id: "p3", value: "Scale monthly revenue to the next level", label: "Scale monthly revenue to the next level" },
];

const REVENUE_OPTIONS = [
  { label: "Under $3,000", value: "Under $3,000" },
  { label: "$3,000 - $10,000", value: "$3,000\u2013$10,000" },
  { label: "$10,000 - $20,000", value: "$10,000\u2013$20,000" },
  { label: "Above $20,000", value: "Above $20,000" },
];

const COMPANY_SIZES = [
  "0-10",
  "10-30",
  "30-50",
  "50-100",
  "100-300",
  "300-500",
  "500+",
];

export default function LeadQualificationForm({ onSuccess }: LeadQualificationFormProps) {
  const [businessType, setBusinessType] = useState("");
  const [growthPriorities, setGrowthPriorities] = useState<string[]>([]);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherPriorityText, setOtherPriorityText] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const togglePriority = (val: string) => {
    setGrowthPriorities((prev) =>
      prev.includes(val) ? prev.filter((p) => p !== val) : [...prev, val]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!businessType) errs.businessType = "Please select your business type.";
    if (growthPriorities.length === 0 && !otherChecked) {
      errs.growthPriorities = "Please select at least one growth priority.";
    }
    if (otherChecked && !otherPriorityText.trim()) {
      errs.otherPriorityText = "Please specify your other priority.";
    }
    if (!monthlyRevenue) errs.monthlyRevenue = "Please select your monthly revenue.";
    if (!companySize) errs.companySize = "Please select your company size.";
    if (!firstName.trim()) errs.firstName = "First name is required.";
    if (!lastName.trim()) errs.lastName = "Last name is required.";
    if (!email.trim()) {
      errs.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!phone.trim()) errs.phone = "Phone number is required.";
    if (!companyName.trim()) errs.companyName = "Company name is required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector("[data-error]");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    const payloadPriorities = [...growthPriorities];
    if (otherChecked) {
      payloadPriorities.push("zfs-others-zfs");
    }

    const payload = {
      referrer: typeof window !== "undefined" ? window.location.href : "https://www.myntmore.com/book-a-call",
      businessType,
      growthPriorities: payloadPriorities,
      otherPriorityText: otherChecked ? otherPriorityText : "",
      monthlyRevenue,
      companySize,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
    };

    try {
      // 1. Submit via our Next.js API route
      await fetch("/api/lead-qualification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Fallback direct submission to hidden iframe
      const formEl = document.getElementById("zoho-direct-form") as HTMLFormElement;
      if (formEl) {
        formEl.submit();
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
      onSuccess({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hidden target iframe and form for direct Zoho submission */}
      <iframe
        name="zoho_hidden_iframe"
        id="zoho_hidden_iframe"
        style={{ display: "none" }}
        title="Zoho submission target"
      />
      <form
        id="zoho-direct-form"
        action="https://forms.zohopublic.com/flintstop/form/LeadQualificationForm/formperma/dFWY_Mhlxg22WwGQtrojPT3u20J-gFyGNppgraGdZZM/htmlRecords/submit"
        method="POST"
        target="zoho_hidden_iframe"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        style={{ display: "none" }}
      >
        <input type="hidden" name="zf_referrer_name" value={typeof window !== "undefined" ? window.location.href : "https://www.myntmore.com/book-a-call"} />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="Dropdown" value={businessType} />
        {growthPriorities.map((p, i) => (
          <input key={i} type="hidden" name="Checkbox" value={p} />
        ))}
        {otherChecked && (
          <>
            <input type="hidden" name="Checkbox" value="zfs-others-zfs" />
            <input type="hidden" name="Checkbox_allow_others_text" value={otherPriorityText} />
          </>
        )}
        <input type="hidden" name="Dropdown1" value={monthlyRevenue} />
        <input type="hidden" name="Dropdown2" value={companySize} />
        <input type="hidden" name="Name_First" value={firstName} />
        <input type="hidden" name="Name_Last" value={lastName} />
        <input type="hidden" name="Email" value={email} />
        <input type="hidden" name="PhoneNumber_countrycode" value={phone} />
        <input type="hidden" name="SingleLine" value={companyName} />
      </form>

      {/* Visible Form Container */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
        {/* Step Indicator Header */}
        <div className="border-b border-[#F0EBE1] pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border bg-[#FEF9EC] text-[#A14A08] border-[#F5B731]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B731]" />
            <span>Step 1 of 2: Lead Qualification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight">
            Let&#39;s Talk About Your Growth
          </h2>
          <p className="text-sm text-[#52525B] mt-1.5 leading-relaxed">
            Tell us a little about your business before we connect. Takes less than 2 minutes.
          </p>
        </div>

        {/* 1. Business Description Dropdown */}
        <div data-error={errors.businessType ? "true" : undefined} className="space-y-2">
          <label className="block text-sm font-bold text-[#0A0A0A]">
            Which best describes your business? <span className="text-[#A14A08]">*</span>
          </label>
          <div className="relative">
            <select
              value={businessType}
              onChange={(e) => {
                setBusinessType(e.target.value);
                if (errors.businessType) setErrors((prev) => ({ ...prev, businessType: "" }));
              }}
              className="w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] font-medium outline-none transition-all duration-150 focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 border-[#E8E2D9] cursor-pointer"
            >
              <option value="">- Select your business type -</option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {errors.businessType && (
            <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* 2. Growth Priority Checkboxes */}
        <div data-error={errors.growthPriorities ? "true" : undefined} className="space-y-2.5">
          <label className="block text-sm font-bold text-[#0A0A0A]">
            What&#39;s your biggest growth priority right now? <span className="text-[#A14A08]">*</span>
          </label>
          <div className="space-y-2">
            {GROWTH_PRIORITIES.map((p) => {
              const isChecked = growthPriorities.includes(p.value);
              return (
                <label
                  key={p.id}
                  onClick={() => {
                    togglePriority(p.value);
                    if (errors.growthPriorities) setErrors((prev) => ({ ...prev, growthPriorities: "" }));
                  }}
                  className={`flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border text-sm cursor-pointer transition-all duration-150 ${
                    isChecked
                      ? "bg-[#FEF9EC] border-[#F5B731] text-[#0A0A0A] font-semibold shadow-xs"
                      : "bg-[#FAF8F5] border-[#E8E2D9] text-[#52525B] hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked ? "bg-[#F5B731] border-[#F5B731] text-[#0A0A0A]" : "border-[#D8D2C7] bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="leading-snug select-none">{p.label}</span>
                </label>
              );
            })}

            {/* Other option */}
            <label
              onClick={() => {
                setOtherChecked(!otherChecked);
                if (errors.growthPriorities) setErrors((prev) => ({ ...prev, growthPriorities: "" }));
              }}
              className={`flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border text-sm cursor-pointer transition-all duration-150 ${
                otherChecked
                  ? "bg-[#FEF9EC] border-[#F5B731] text-[#0A0A0A] font-semibold shadow-xs"
                  : "bg-[#FAF8F5] border-[#E8E2D9] text-[#52525B] hover:bg-white"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                  otherChecked ? "bg-[#F5B731] border-[#F5B731] text-[#0A0A0A]" : "border-[#D8D2C7] bg-white"
                }`}
              >
                {otherChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span className="leading-snug select-none">Other</span>
            </label>

            {otherChecked && (
              <div className="pt-1 pl-8">
                <input
                  type="text"
                  maxLength={150}
                  placeholder="Please specify your priority..."
                  value={otherPriorityText}
                  onChange={(e) => {
                    setOtherPriorityText(e.target.value);
                    if (errors.otherPriorityText) setErrors((prev) => ({ ...prev, otherPriorityText: "" }));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
                />
                {errors.otherPriorityText && (
                  <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.otherPriorityText}</p>
                )}
              </div>
            )}
          </div>
          {errors.growthPriorities && (
            <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.growthPriorities}</p>
          )}
        </div>

        {/* 3. Monthly Revenue Dropdown */}
        <div data-error={errors.monthlyRevenue ? "true" : undefined} className="space-y-2">
          <label className="block text-sm font-bold text-[#0A0A0A]">
            What&#39;s your current average monthly business revenue? <span className="text-[#A14A08]">*</span>
          </label>
          <select
            value={monthlyRevenue}
            onChange={(e) => {
              setMonthlyRevenue(e.target.value);
              if (errors.monthlyRevenue) setErrors((prev) => ({ ...prev, monthlyRevenue: "" }));
            }}
            className="w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] font-medium outline-none transition-all duration-150 focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 border-[#E8E2D9] cursor-pointer"
          >
            <option value="">- Select monthly revenue range -</option>
            {REVENUE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.monthlyRevenue && (
            <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.monthlyRevenue}</p>
          )}
        </div>

        {/* 4. Company Size Dropdown */}
        <div data-error={errors.companySize ? "true" : undefined} className="space-y-2">
          <label className="block text-sm font-bold text-[#0A0A0A]">
            What&#39;s your company size right now? <span className="text-[#A14A08]">*</span>
          </label>
          <select
            value={companySize}
            onChange={(e) => {
              setCompanySize(e.target.value);
              if (errors.companySize) setErrors((prev) => ({ ...prev, companySize: "" }));
            }}
            className="w-full px-4 py-3 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] font-medium outline-none transition-all duration-150 focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 border-[#E8E2D9] cursor-pointer"
          >
            <option value="">- Select team size -</option>
            {COMPANY_SIZES.map((size) => (
              <option key={size} value={size}>
                {size} employees
              </option>
            ))}
          </select>
          {errors.companySize && (
            <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.companySize}</p>
          )}
        </div>

        {/* 5. Contact Info Grid */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#71675E]">
            Contact & Company Details
          </h3>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div data-error={errors.firstName ? "true" : undefined}>
              <label className="block text-xs font-semibold text-[#52525B] mb-1">
                First Name <span className="text-[#A14A08]">*</span>
              </label>
              <input
                type="text"
                maxLength={255}
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: "" }));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
              />
              {errors.firstName && (
                <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.firstName}</p>
              )}
            </div>

            <div data-error={errors.lastName ? "true" : undefined}>
              <label className="block text-xs font-semibold text-[#52525B] mb-1">
                Last Name <span className="text-[#A14A08]">*</span>
              </label>
              <input
                type="text"
                maxLength={255}
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
              />
              {errors.lastName && (
                <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Business Email */}
          <div data-error={errors.email ? "true" : undefined}>
            <label className="block text-xs font-semibold text-[#52525B] mb-1">
              Business Email <span className="text-[#A14A08]">*</span>
            </label>
            <input
              type="email"
              maxLength={255}
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
            />
            {errors.email && (
              <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div data-error={errors.phone ? "true" : undefined}>
            <label className="block text-xs font-semibold text-[#52525B] mb-1">
              Phone Number <span className="text-[#A14A08]">*</span>
            </label>
            <input
              type="tel"
              maxLength={20}
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
            />
            {errors.phone && (
              <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Company Name */}
          <div data-error={errors.companyName ? "true" : undefined}>
            <label className="block text-xs font-semibold text-[#52525B] mb-1">
              Company Name <span className="text-[#A14A08]">*</span>
            </label>
            <input
              type="text"
              maxLength={255}
              placeholder="Your company or agency name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                if (errors.companyName) setErrors((prev) => ({ ...prev, companyName: "" }));
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border bg-[#FAF8F5] text-sm text-[#0A0A0A] outline-none border-[#E8E2D9] focus:border-[#F5B731] focus:ring-2 focus:ring-[#F5B731]/20 transition-all"
            />
            {errors.companyName && (
              <p className="text-xs text-[#A14A08] font-semibold mt-1">{errors.companyName}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <Button
            type="submit"
            variant="hero"
            size="xl"
            disabled={submitting}
            className="w-full rounded-full shadow-xl active:scale-[0.98] transition-all duration-150 cursor-pointer font-bold flex items-center justify-center gap-2"
          >
            {submitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                <span>Saving details...</span>
              </div>
            ) : (
              <>
                <span>Continue to Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
          <p className="text-center text-xs text-[#71675E] font-medium mt-3">
            Takes 90 seconds · 100% Free · Direct access to calendar
          </p>
        </div>
      </form>
    </div>
  );
}
