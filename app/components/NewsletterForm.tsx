interface Props { inputId: string; compact?: boolean; buttonLabel?: string }

export default function NewsletterForm({ inputId, compact = false, buttonLabel = "Subscribe free" }: Props) {
  return (
    <form method="POST" action="https://tsop-zgfl.maillist-manage.com/weboptin.zc" target="_blank" className={compact ? "flex gap-2" : "space-y-3"}>
      <label htmlFor={inputId} className="sr-only">Work email address</label>
      <input id={inputId} type="email" name="CONTACT_EMAIL" placeholder="you@company.com" required autoComplete="email"
        className={compact ? "flex-1 min-w-0 px-3 py-1.5 rounded-lg text-xs outline-none border" : "w-full px-5 py-4 rounded-xl text-sm outline-none border transition-shadow focus:ring-4"}
        style={{ backgroundColor: "#fff", borderColor: "rgba(245,183,49,0.45)", color: "#0a0a0a" }} />
      <button type="submit" className={compact ? "px-3 py-1.5 rounded-lg text-xs font-bold shrink-0" : "btn-dark w-full px-6 py-4 text-sm font-black"}
        style={compact ? { backgroundColor: "#F5B731", color: "#0a0a0a" } : undefined}>{compact ? "Join" : buttonLabel}</button>
      <input type="hidden" name="submitType" value="optinCustomView" />
      <input type="hidden" name="formType" value="QuickForm" />
      <input type="hidden" name="zx" value="136d6a7e5" />
      <input type="hidden" name="zcvers" value="3.0" />
      <input type="hidden" name="oldListIds" value="" />
      <input type="hidden" name="mode" value="OptinCreateView" />
      <input type="hidden" name="zcld" value="" />
      <input type="hidden" name="zctd" value="" />
      <input type="hidden" name="document_domain" value="" />
      <input type="hidden" name="zc_Url" value="flin-zgpm.maillist-manage.com" />
      <input type="hidden" name="new_optin_response_in" value="0" />
      <input type="hidden" name="duplicate_optin_response_in" value="0" />
      <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
      <input type="hidden" name="zc_formIx" value="3z9fc5e049897874918c8ec61408434d90ec1e3c29e2f0e6cf2784215521d683ff" />
      <input type="hidden" name="viewFrom" value="URL_ACTION" />
      <input type="hidden" name="emailReportId" value="" />
    </form>
  );
}
