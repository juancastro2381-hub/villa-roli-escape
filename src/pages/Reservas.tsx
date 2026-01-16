import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Home, Info, MessageCircle, Sun, Heart, UserCheck, Moon, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import fincaPiscinaNoche from "@/assets/finca-piscina-noche2.jpg";
import { AvailabilityCalendar } from "@/components/ui/AvailabilityCalendar";
import {
  WHATSAPP_NUMBER,
  PASADIA_PRICES,
  PASADIA_INFO,
  NOCHES_PRICES,
  NOCHES_INFO,
  PLAN_FAMILIA,
  PLAN_PAREJA,
  HORA_ADICIONAL,
  TIPO_RESERVA_LABELS,
  calcularPrecio,
  validarMinimoPersonas,
  type TipoReserva,
} from "@/lib/pricing";

const Reservas = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    tipoReserva: "" as TipoReserva | "",
    huespedes: "",
    checkin: "",
    checkout: "",
    ocasion: "",
    mensaje: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calcular noches
  const noches = useMemo(() => {
    if (!formData.checkin || !formData.checkout) return 1;
    const start = new Date(formData.checkin);
    const end = new Date(formData.checkout);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [formData.checkin, formData.checkout]);

  // Calcular precio
  const precioCalculado = useMemo(() => {
    if (!formData.tipoReserva || !formData.huespedes) return null;
    const personas = parseInt(formData.huespedes);
    return calcularPrecio(formData.tipoReserva as TipoReserva, personas, noches);
  }, [formData.tipoReserva, formData.huespedes, noches]);

  // Validar mínimo de personas
  const validacionPersonas = useMemo(() => {
    if (!formData.tipoReserva || !formData.huespedes) return { valido: true, mensaje: "" };
    const personas = parseInt(formData.huespedes);
    return validarMinimoPersonas(formData.tipoReserva as TipoReserva, personas);
  }, [formData.tipoReserva, formData.huespedes]);

  const isPasadia = formData.tipoReserva?.startsWith("pasadia");
  const isPlanEspecial = formData.tipoReserva === "plan-familia" || formData.tipoReserva === "plan-pareja";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.nombre || !formData.email || !formData.telefono || !formData.tipoReserva || !formData.huespedes || !formData.checkin) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!validacionPersonas.valido) {
      toast({
        title: "Número de personas inválido",
        description: validacionPersonas.mensaje,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const tipoLabel = TIPO_RESERVA_LABELS[formData.tipoReserva as TipoReserva];
    const precioInfo = precioCalculado ? `\n💰 *Precio Estimado:* $${precioCalculado.total.toLocaleString()} COP\n   (${precioCalculado.descripcion})` : "";

    const message = `🏡 *Nueva Solicitud de Reserva - Villa Roli*

👤 *Información del Cliente:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
${formData.ciudad ? `• Ciudad: ${formData.ciudad}` : ""}

🏠 *Detalles de la Reserva:*
• Tipo: ${tipoLabel}
• Personas: ${formData.huespedes}
• ${isPasadia ? "Fecha" : "Check-in"}: ${formData.checkin}
${!isPasadia && formData.checkout ? `• Check-out: ${formData.checkout}` : ""}
${!isPasadia && formData.checkout ? `• Noches: ${noches}` : ""}
${formData.ocasion ? `• Ocasión: ${formData.ocasion}` : ""}
${precioInfo}

${formData.mensaje ? `💬 *Comentarios:*\n${formData.mensaje}` : ""}

---
Enviado desde el formulario web de Villa Roli`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Te hemos abierto WhatsApp para que envíes tu solicitud de reserva directamente.",
    });

    setIsSubmitting(false);
  };

  // Opciones de personas según tipo de reserva
  const personasOptions = useMemo(() => {
    if (formData.tipoReserva === "plan-pareja") return [2];
    if (formData.tipoReserva === "plan-familia") return [1, 2, 3, 4, 5];
    if (formData.tipoReserva?.startsWith("pasadia")) return Array.from({ length: 50 }, (_, i) => i + 1);
    if (formData.tipoReserva?.startsWith("noches")) return Array.from({ length: 37 }, (_, i) => i + 1);
    return Array.from({ length: 37 }, (_, i) => i + 1);
  }, [formData.tipoReserva]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fincaPiscinaNoche}
            alt="Reservas en Villa Roli"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-cta/20 backdrop-blur-sm rounded-full text-gold font-body text-sm tracking-wider uppercase mb-4">
              Reservas
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
              Reservar Villa Roli
            </h1>
            <p className="font-body text-cream-light/80 text-lg mt-4 max-w-2xl mx-auto">
              Selecciona tu plan ideal y completa el formulario para enviar tu solicitud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-cta font-body text-sm tracking-wider uppercase">
              Precios 2025
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Nuestros Planes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pasadía */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Pasadía</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{PASADIA_INFO.horario}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Lun - Jue:</span>
                  <span className="font-semibold text-gold">${PASADIA_PRICES.entreSemana.toLocaleString()}/persona</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vie - Dom:</span>
                  <span className="font-semibold text-gold">${PASADIA_PRICES.finDeSemana.toLocaleString()}/persona</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">{PASADIA_INFO.nota}</p>
            </motion.div>

            {/* Noches - Finca Completa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Moon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Noches</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{NOCHES_INFO.horario}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Lun - Jue (mín. 10):</span>
                  <span className="font-semibold text-gold">${NOCHES_PRICES.entreSemana.precio.toLocaleString()}/p</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vie - Dom (mín. 10):</span>
                  <span className="font-semibold text-gold">${NOCHES_PRICES.finDeSemana.precio.toLocaleString()}/p</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Festivo (mín. 15):</span>
                  <span className="font-semibold text-gold">${NOCHES_PRICES.festivo.precio.toLocaleString()}/p</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">+ Aseo: ${NOCHES_INFO.aseo.toLocaleString()}</p>
            </motion.div>

            {/* Plan Familia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-cta/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Plan Familia</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{PLAN_FAMILIA.horario}</p>
              <div className="mb-4">
                <span className="font-display text-2xl font-bold text-gold">${PLAN_FAMILIA.precio.toLocaleString()}</span>
                <span className="text-muted-foreground text-sm"> / noche</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li>• Máximo {PLAN_FAMILIA.maxPersonas} personas</li>
                <li>• {PLAN_FAMILIA.cabana}</li>
                <li>• Aseo incluido</li>
              </ul>
            </motion.div>

            {/* Plan Pareja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 border border-gold/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream-light">Plan Pareja</h3>
              </div>
              <p className="text-cream-light/70 text-sm mb-4">{PLAN_PAREJA.horario}</p>
              <div className="mb-4">
                <span className="font-display text-2xl font-bold text-gold">${PLAN_PAREJA.precio.toLocaleString()}</span>
                <span className="text-cream-light/70 text-sm"> / noche</span>
              </div>
              <ul className="space-y-1 text-sm text-cream-light/80 mb-4">
                <li>• {PLAN_PAREJA.cabana}</li>
                <li>• 2 cervezas de bienvenida</li>
                <li>• Decoración según ocasión</li>
                <li>• Aseo incluido</li>
              </ul>
            </motion.div>
          </div>

          {/* Nota hora adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              <Info className="inline w-4 h-4 mr-1" />
              Hora adicional (entrada temprana o salida tarde): <span className="font-semibold text-gold">${HORA_ADICIONAL.toLocaleString()}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Users className="text-gold" />
                    Información Personal
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        required
                        className="bg-background"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="bg-background"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+57 322 972 6625"
                        required
                        className="bg-background"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad de Origen</Label>
                      <Input
                        id="ciudad"
                        placeholder="Tu ciudad"
                        className="bg-background"
                        value={formData.ciudad}
                        onChange={(e) => handleInputChange("ciudad", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Home className="text-gold" />
                    Detalles de la Reserva
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="tipoReserva">Tipo de Reserva *</Label>
                      <Select 
                        required 
                        value={formData.tipoReserva}
                        onValueChange={(value) => {
                          handleInputChange("tipoReserva", value);
                          // Reset huespedes when type changes
                          handleInputChange("huespedes", "");
                        }}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecciona el tipo de reserva" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pasadia-entre-semana">
                            <span className="flex items-center gap-2">
                              <Sun size={16} className="text-gold" />
                              Pasadía Entre Semana (Lun-Jue) - ${PASADIA_PRICES.entreSemana.toLocaleString()}/persona
                            </span>
                          </SelectItem>
                          <SelectItem value="pasadia-fin-semana">
                            <span className="flex items-center gap-2">
                              <Sun size={16} className="text-gold" />
                              Pasadía Fin de Semana (Vie-Dom) - ${PASADIA_PRICES.finDeSemana.toLocaleString()}/persona
                            </span>
                          </SelectItem>
                          <SelectItem value="noches-entre-semana">
                            <span className="flex items-center gap-2">
                              <Moon size={16} className="text-gold" />
                              Finca Completa Entre Semana - ${NOCHES_PRICES.entreSemana.precio.toLocaleString()}/persona/noche
                            </span>
                          </SelectItem>
                          <SelectItem value="noches-fin-semana">
                            <span className="flex items-center gap-2">
                              <Moon size={16} className="text-gold" />
                              Finca Completa Fin de Semana - ${NOCHES_PRICES.finDeSemana.precio.toLocaleString()}/persona/noche
                            </span>
                          </SelectItem>
                          <SelectItem value="noches-festivo">
                            <span className="flex items-center gap-2">
                              <Moon size={16} className="text-gold" />
                              Finca Completa Festivo - ${NOCHES_PRICES.festivo.precio.toLocaleString()}/persona/noche
                            </span>
                          </SelectItem>
                          <SelectItem value="plan-familia">
                            <span className="flex items-center gap-2">
                              <UserCheck size={16} className="text-gold" />
                              Plan Familia (máx. 5 personas) - ${PLAN_FAMILIA.precio.toLocaleString()}
                            </span>
                          </SelectItem>
                          <SelectItem value="plan-pareja">
                            <span className="flex items-center gap-2">
                              <Heart size={16} className="text-gold" />
                              Plan Pareja (2 personas) - ${PLAN_PAREJA.precio.toLocaleString()}
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="huespedes">Número de Personas *</Label>
                      <Select 
                        required
                        value={formData.huespedes}
                        onValueChange={(value) => handleInputChange("huespedes", value)}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          {personasOptions.map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {!validacionPersonas.valido && (
                        <p className="text-destructive text-sm flex items-center gap-1">
                          <AlertCircle size={14} />
                          {validacionPersonas.mensaje}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="checkin">
                        {isPasadia ? "Fecha del Pasadía *" : "Fecha de Llegada *"}
                      </Label>
                      <Input
                        id="checkin"
                        type="date"
                        required
                        className="bg-background"
                        value={formData.checkin}
                        onChange={(e) => handleInputChange("checkin", e.target.value)}
                      />
                    </div>

                    {!isPasadia && (
                      <div className="space-y-2">
                        <Label htmlFor="checkout">Fecha de Salida *</Label>
                        <Input
                          id="checkout"
                          type="date"
                          required={!isPasadia}
                          className="bg-background"
                          value={formData.checkout}
                          onChange={(e) => handleInputChange("checkout", e.target.value)}
                        />
                      </div>
                    )}

                    {formData.tipoReserva === "plan-pareja" && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="ocasion">Ocasión Especial</Label>
                        <Select
                          value={formData.ocasion}
                          onValueChange={(value) => handleInputChange("ocasion", value)}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Selecciona la ocasión (para decoración)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Aniversario">Aniversario</SelectItem>
                            <SelectItem value="Cumpleaños">Cumpleaños</SelectItem>
                            <SelectItem value="Luna de miel">Luna de miel</SelectItem>
                            <SelectItem value="Propuesta de matrimonio">Propuesta de matrimonio</SelectItem>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {/* Price Calculator */}
                  {precioCalculado && validacionPersonas.valido && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl border border-gold/20"
                    >
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="text-gold" size={20} />
                        Precio Estimado
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{precioCalculado.descripcion}</p>
                      <div className="space-y-1">
                        {precioCalculado.aseo > 0 && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Subtotal:</span>
                              <span className="font-semibold">${precioCalculado.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Aseo:</span>
                              <span className="font-semibold">${precioCalculado.aseo.toLocaleString()}</span>
                            </div>
                          </>
                        )}
                        <div className="flex justify-between text-lg border-t border-gold/20 pt-2 mt-2">
                          <span className="font-semibold text-foreground">Total:</span>
                          <span className="font-bold text-gold">${precioCalculado.total.toLocaleString()} COP</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Additional Info */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Info className="text-gold" />
                    Información Adicional
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">
                        Comentarios o Solicitudes Especiales
                      </Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos si tienes alguna solicitud especial, hora de llegada estimada, servicios adicionales que te interesen, etc."
                        rows={4}
                        className="bg-background resize-none"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold py-6 text-lg gap-3"
                  disabled={isSubmitting || !validacionPersonas.valido}
                >
                  <MessageCircle size={22} />
                  {isSubmitting ? "Abriendo WhatsApp..." : "Enviar Solicitud por WhatsApp"}
                </Button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32 space-y-8">
                {/* Calendario de Disponibilidad */}
                <AvailabilityCalendar />

                {/* Acomodaciones */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Acomodaciones Disponibles
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para reservas de Finca Completa, contamos con 3 cabañas:
                  </p>
                  <div className="space-y-3">
                    {NOCHES_INFO.cabanas.map((cabana) => (
                      <div key={cabana.nombre} className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0">
                        <div>
                          <p className="font-semibold text-foreground">{cabana.nombre}</p>
                          <p className="text-sm text-muted-foreground">{cabana.camas}</p>
                        </div>
                        <p className="text-gold font-semibold">{cabana.capacidad} pers.</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Capacidad total:</strong> 37 personas
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Información Importante
                  </h3>
                  <ul className="space-y-4 text-muted-foreground font-body">
                    <li className="flex items-start gap-3">
                      <Calendar size={20} className="text-gold shrink-0 mt-1" />
                      <span><strong className="text-foreground">Noches:</strong> Ingreso 2 PM - Salida 1 PM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sun size={20} className="text-gold shrink-0 mt-1" />
                      <span><strong className="text-foreground">Pasadía:</strong> 8 AM - 5 PM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info size={20} className="text-gold shrink-0 mt-1" />
                      <span>Planes Familia y Pareja solo en Cabaña #3</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info size={20} className="text-gold shrink-0 mt-1" />
                      <span>Hora adicional: ${HORA_ADICIONAL.toLocaleString()}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    ¿Necesitas Ayuda?
                  </h3>
                  <p className="font-body text-primary-foreground/80 mb-4">
                    Si tienes preguntas o prefieres reservar por teléfono,
                    estamos aquí para ayudarte.
                  </p>
                  <p className="font-body font-semibold text-gold">
                    +57 322 972 6625
                  </p>
                  <p className="font-body text-primary-foreground/80 text-sm mt-1">
                    Lun - Dom: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservas;
