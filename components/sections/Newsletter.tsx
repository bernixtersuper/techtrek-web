"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycqvO9v3d_TVOhl4Sl3h4OGFcgBd6o7OWvSMv0DC68zUeg180QRNQ81MoQBrupfsv0/exec";

type Status = "idle" | "loading" | "success" | "error";
type UserType = "estudiante" | "empresa";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-28 h-28"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const inputClass =
  "bg-[#141414] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white placeholder-[#333] text-sm outline-none focus:border-[#eec416] transition-colors duration-200";

const labelClass = "text-[#555] text-xs uppercase tracking-[0.15em]";

export default function Newsletter() {
  const [userType, setUserType] = useState<UserType>("estudiante");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [notas, setNotas] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [btnHovered, setBtnHovered] = useState(false);

  function handleTypeSwitch(type: UserType) {
    setUserType(type);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!APPS_SCRIPT_URL) return;
    setStatus("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          tipo: userType,
          nombre: name.trim(),
          email: email.trim(),
          notas: notas.trim(),
          ...(userType === "empresa" && {
            empresa: empresa.trim(),
          }),
        }),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setEmpresa("");
      setNotas("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="sumate" className="py-24 md:py-32 px-6 border-t border-[#1f1f1f] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-6">
          <p
            className="text-[#eec416] text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Comunidad
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-24">
          {/* Left — copy */}
          <div className="lg:max-w-sm">
            <AnimatedSection delay={0.1} className="mb-4">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={userType + "-heading"}
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-white uppercase text-4xl md:text-5xl leading-none tracking-tighter"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                >
                  {userType === "estudiante" ? (
                    <>Enterate<br />de <span className="text-[#eec416]">todo.</span></>
                  ) : (
                    <>Trabajemos<br /><span className="text-[#eec416]">juntos.</span></>
                  )}
                </motion.h2>
              </AnimatePresence>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={userType}
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-[#999999] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {userType === "estudiante"
                    ? "Hub, Talks, Visits y más. Todo en tu mail. Antes que nadie."
                    : "Dejanos tu contacto y nuestro equipo se comunica con ustedes para encontrar la mejor forma de trabajar juntos."}
                </motion.p>
              </AnimatePresence>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection delay={0.25} direction="left" className="lg:flex-1 lg:max-w-lg w-full">
            <div className="relative mt-16 lg:mt-0">

              {/* Mail icon — sits behind the card, peeks from above on button hover */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 z-0 text-[#eec416] pointer-events-none transition-all duration-500 ease-out ${
                  btnHovered ? "-translate-y-20 opacity-30" : "-translate-y-14 opacity-[0.18]"
                }`}
              >
                <MailIcon />
              </div>

              {status === "success" ? (
                <div className="relative z-10 border border-[#1f1f1f] rounded-2xl p-8 bg-[#0f0f0f] text-center">
                  <p
                    className="text-[#eec416] text-sm uppercase tracking-[0.2em] mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Listo
                  </p>
                  <p
                    className="text-white text-lg"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                  >
                    {userType === "empresa"
                      ? "Gracias por el interés."
                      : "Ya estás en la lista."}
                  </p>
                  <p
                    className="text-[#555] text-sm mt-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {userType === "empresa"
                      ? "Nuestro equipo se va a contactar con ustedes."
                      : "Te avisamos cuando haya novedades."}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 border border-[#1f1f1f] rounded-2xl p-8 bg-[#0f0f0f] flex flex-col gap-4"
                >
                  {/* Sliding pill toggle */}
                  <div className="relative flex rounded-xl bg-[#141414] border border-[#1f1f1f] p-1 mb-2">
                    <motion.div
                      className="absolute inset-y-1 rounded-lg bg-[#eec416]"
                      style={{ width: "calc(50% - 4px)" }}
                      initial={false}
                      animate={{ left: userType === "estudiante" ? 4 : "50%" }}
                      transition={{ type: "spring", stiffness: 500, damping: 42 }}
                    />
                    {(["estudiante", "empresa"] as UserType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeSwitch(type)}
                        className="relative z-10 flex-1 py-2 rounded-lg text-xs uppercase tracking-widest transition-colors duration-200"
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          color: userType === type ? "#0d0d0d" : "#555",
                        }}
                      >
                        {type === "estudiante" ? "Estudiante" : "Empresa"}
                      </button>
                    ))}
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="nl-name" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      Nombre
                    </label>
                    <input
                      id="nl-name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="nl-email" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      Email
                    </label>
                    <input
                      id="nl-email"
                      type="email"
                      required
                      placeholder="tu@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {/* Empresa-only field — animate in/out */}
                  <AnimatePresence initial={false}>
                    {userType === "empresa" && (
                      <motion.div
                        key="empresa-field"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          <label htmlFor="nl-empresa" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                            Empresa
                          </label>
                          <input
                            id="nl-empresa"
                            type="text"
                            required
                            placeholder="Nombre de la empresa"
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                            className={inputClass}
                            style={{ fontFamily: "var(--font-inter)" }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Notes — both types */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="nl-notas" className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      Notas{" "}
                      <span className="normal-case tracking-normal text-[#333]">(opcional)</span>
                    </label>
                    <textarea
                      id="nl-notas"
                      rows={3}
                      placeholder={
                        userType === "empresa"
                          ? "¿En qué están interesados? ¿Tienen alguna consulta?"
                          : "¿Qué estudiás? ¿Qué evento te interesa más?"
                      }
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                      Algo falló. Revisá tu conexión e intentá de nuevo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    className="btn-gold mt-2 w-full py-3.5 bg-[#eec416] text-[#0d0d0d] rounded-full text-sm uppercase tracking-widest hover:bg-[#f5d038] transition-all duration-200 hover:scale-[1.02] active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
                  >
                    {status === "loading" ? "Enviando..." : userType === "estudiante" ? <>Anotarme <span>→</span></> : <>Enviar <span>→</span></>}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
