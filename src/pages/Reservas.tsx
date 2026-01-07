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
import { Calendar, Users, Home, Info } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Reservas = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Solicitud Enviada!",
      description:
        "Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar disponibilidad.",
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold font-body text-sm tracking-wider uppercase">
              Reservas
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-3">
              Reserva Tu Escapada
            </h1>
            <p className="font-body text-muted-foreground text-lg mt-6 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para
              confirmar la disponibilidad y finalizar tu reserva.
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
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ciudad">Ciudad de Origen</Label>
                      <Input
                        id="ciudad"
                        placeholder="Tu ciudad"
                        className="bg-background"
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
                    <div className="space-y-2">
                      <Label htmlFor="cabana">Cabaña *</Label>
                      <Select required>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecciona una cabaña" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aurora">
                            Cabaña Aurora (2 huéspedes)
                          </SelectItem>
                          <SelectItem value="serena">
                            Cabaña Serena (4 huéspedes)
                          </SelectItem>
                          <SelectItem value="montana">
                            Cabaña Montaña (6 huéspedes)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="huespedes">Número de Huéspedes *</Label>
                      <Select required>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "huésped" : "huéspedes"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Fecha de Llegada *</Label>
                      <Input
                        id="checkin"
                        type="date"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Fecha de Salida *</Label>
                      <Input
                        id="checkout"
                        type="date"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Info className="text-gold" />
                    Información Adicional
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="ocasion">
                        ¿Es una ocasión especial?
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Selecciona (opcional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aniversario">
                            Aniversario
                          </SelectItem>
                          <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
                          <SelectItem value="luna-miel">
                            Luna de miel
                          </SelectItem>
                          <SelectItem value="vacaciones">
                            Vacaciones familiares
                          </SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">
                        Comentarios o Solicitudes Especiales
                      </Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos si tienes alguna solicitud especial, alergias alimentarias, hora de llegada estimada, etc."
                        rows={4}
                        className="bg-background resize-none"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Reserva"}
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
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Información Importante
                  </h3>
                  <ul className="space-y-4 text-muted-foreground font-body">
                    <li className="flex items-start gap-3">
                      <Calendar size={20} className="text-gold shrink-0 mt-1" />
                      <span>Check-in: 3:00 PM | Check-out: 12:00 PM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info size={20} className="text-gold shrink-0 mt-1" />
                      <span>
                        Estadía mínima: 2 noches (3 noches en temporada alta)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Info size={20} className="text-gold shrink-0 mt-1" />
                      <span>
                        Cancelación gratuita hasta 48 horas antes de la llegada
                      </span>
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
                    +57 300 123 4567
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
