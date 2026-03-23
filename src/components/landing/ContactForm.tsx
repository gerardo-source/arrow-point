import { useState, FormEvent } from "react";

const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim() || !nameRegex.test(name.trim())) {
      newErrors.name = "Solo letras";
    }
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Correo inválido";
    }
    if (!phone.trim() || !phoneRegex.test(phone.trim())) {
      newErrors.phone = "10 dígitos";
    }
    if (!message.trim()) {
      newErrors.message = "Requerido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: enviar datos
  };

  const inputBase = "rounded-lg px-4 py-3 bg-white text-black placeholder:text-[#9ca3af] text-sm outline-none";
  const errorClass = "ring-2 ring-red-400";

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "" || nameRegex.test(v)) setName(v);
            }}
            className={`${inputBase} w-full ${errors.name ? errorClass : ""}`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputBase} w-full ${errors.email ? errorClass : ""}`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="tel"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "").slice(0, 10);
              setPhone(v);
            }}
            className={`${inputBase} w-full ${errors.phone ? errorClass : ""}`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`rounded-lg px-4 py-3 bg-white text-sm outline-none appearance-none ${service ? "text-black" : "text-[#9ca3af]"}`}
        >
          <option value="" disabled>Servicio de interés</option>
          <option value="faas">Finance as a Service</option>
          <option value="nh">NH by Arrowpoint</option>
        </select>
      </div>
      <div>
        <textarea
          placeholder="Mensaje"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputBase} w-full resize-none ${errors.message ? errorClass : ""}`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Enviar
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
