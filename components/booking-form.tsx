import React, { useState, useEffect } from "react";

type ToastState = {
  visible: boolean;
  message: string;
};

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "CAMPAIGN", message: "" });
  const [status, setStatus] = useState("IDLE");
  const [toast, setToast] = useState<ToastState>({ visible: false, message: "" });

  const triggerToast = (message: string) => {
    setToast({ visible: true, message });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, message: "" });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("REDIRECTING");
  
  // Fire the custom editorial pop-up instantly on submission
  triggerToast("LAUNCHING NATIVE EMAIL CLIENT // ↗");

  const emailTo = "perfectionchizuruoke@gmail.com";
  const subject = `[PORTFOLIO PIPELINE] // ${formData.projectType} - ${formData.name}`;

  const bodyContent = [
    `ID_NAME: ${formData.name}`,
    `COMMUNICATION_VECTOR: ${formData.email}`,
    `OPERATION_PARAMETER: ${formData.projectType}`,
    `\nCONTEXT_MANIFESTO:`,
    `----------------------------------------------`,
    formData.message,
    `----------------------------------------------`,
    `[SENT VIA WEB_PORTFOLIO // INTERACTIVE DESK]`,
  ].join("\n");

  const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

  const link = document.createElement("a");
  link.href = mailtoUrl;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => {
    setStatus("IDLE");
    setFormData({ name: "", email: "", projectType: "CAMPAIGN", message: "" })
  }, 1500);
};

  return (
    <div className="reveal-form-field invisible lg:col-span-7 bg-foreground/[0.02] border border-foreground/10 p-8 sm:p-12 rounded-2xl backdrop-blur-md shadow-2xl relative transition-all duration-500 overflow-hidden">
      
      <div 
        className={`absolute top-6 left-1/2 -translate-x-1/2 z-[300] w-[90%] sm:w-auto min-w-[280px] bg-foreground text-background text-center px-6 py-3 rounded-full font-mono text-[10px] tracking-[0.15em] uppercase shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none flex items-center justify-center gap-2 border border-background/10 ${
          toast.visible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 -translate-y-4 scale-95"
        }`}
      >
        <span className="w-1.5 h-1.5 bg-background rounded-full animate-ping shrink-0" />
        <span>{toast.message}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 font-sans">
        {/* CLIENT INPUT MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="reveal-form-field invisible space-y-2 relative group">
            <label className="text-[10px] font-mono tracking-widest opacity-50 uppercase block transition-all duration-300 group-focus-within:opacity-100 group-focus-within:text-foreground">
              01 // Client / Agency Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ALEXANDER SMITH"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-foreground/[0.02] border border-foreground/20 focus:border-foreground/60 focus:bg-transparent px-4 py-3 rounded-lg text-sm tracking-wide text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300 font-light font-sans"
            />
          </div>

          <div className="reveal-form-field invisible space-y-2 relative group">
            <label className="text-[10px] font-mono tracking-widest opacity-50 uppercase block transition-all duration-300 group-focus-within:opacity-100 group-focus-within:text-foreground">
              02 // Email Address
            </label>
            <input
              type="email"
              required
              placeholder="e.g. HELLO@DOMAIN.COM"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-foreground/[0.02] border border-foreground/20 focus:border-foreground/60 focus:bg-transparent px-4 py-3 rounded-lg text-sm tracking-wide text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300 font-light font-sans"
            />
          </div>
        </div>

        {/* PROJECT SELECTION CHIPS */}
        <div className="reveal-form-field invisible space-y-3">
          <label className="text-[10px] font-mono tracking-widest opacity-50 uppercase block">
            03 // Project Assignment Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] font-mono">
            {["CAMPAIGN", "MOTION / REEL", "RUNWAY // SHOW", "OTHER"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, projectType: type })}
                className={`border p-3 rounded-lg transition-all duration-300 tracking-wider text-center cursor-pointer uppercase ${
                  formData.projectType === type
                    ? "bg-foreground text-background border-foreground font-bold scale-[1.02] shadow-md"
                    : "border-foreground/20 bg-transparent text-foreground/70 hover:text-foreground hover:border-foreground/50 hover:bg-foreground/[0.04]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* SCOPE FIELD TEXTAREA */}
        <div className="reveal-form-field invisible space-y-2 relative group">
          <label className="text-[10px] font-mono tracking-widest opacity-50 uppercase block transition-all duration-300 group-focus-within:opacity-100 group-focus-within:text-foreground">
            04 // Project Details & Scope
          </label>
          <textarea
            rows={5}
            required
            placeholder="DESCRIBE THE VISUAL CONCEPT, EXPECTED TIMELINE, LOCATION, OR MOODBOARD DIRECTIVES..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-foreground/[0.02] border border-foreground/20 focus:border-foreground/60 focus:bg-transparent px-4 py-3 rounded-lg text-sm tracking-wide text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300 font-light font-sans resize-none leading-relaxed"
          />
        </div>

        {/* SUBMIT ACTIONS PLATFORM */}
        <div className="reveal-form-field invisible space-y-5 pt-2">
          <button
            type="submit"
            className="w-full bg-foreground text-background hover:scale-[1.01] active:scale-[0.99] py-4 rounded-full font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative flex items-center justify-center cursor-pointer overflow-hidden group/btn shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-background/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative flex items-center gap-2">
              {status === "IDLE" ? (
                <>
                  LAUNCH EMAIL CLIENT 
                  <span className="inline-block transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </>
              ) : (
                "PREPARING BOOKING REQUEST..."
              )}
            </span>
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("perfectionchizuruoke@gmail.com");
                triggerToast("EMAIL COPIED TO CLIPBOARD // [✓]");
              }}
              className="inline-block text-[10px] font-mono opacity-40 hover:opacity-100 transition-all duration-300 uppercase tracking-widest cursor-pointer hover:underline underline-offset-4"
            >
              [ Or manually copy: perfectionchizuruoke@gmail.com ]
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}