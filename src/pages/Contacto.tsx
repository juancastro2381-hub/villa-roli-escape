import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactoHero from "@/assets/contacto-hero.jpg";

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje Enviado!",
      description:
        "Gracias por contactarnos. Te responderemos lo antes posible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactoHero}
            alt="Contacto Villa Roli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold font-body text-sm tracking-wider uppercase mb-4">
              Contacto
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
              Hablemos
            </h1>
            <p className="font-body text-cream-light/80 text-lg mt-4 max-w-2xl mx-auto">
              ¿Tienes preguntas o necesitas más información? Estamos aquí para
              ayudarte a planificar tu escapada perfecta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Información de Contacto
                </h2>
                <p className="font-body text-muted-foreground text-lg">
                  Estaremos encantados de responder tus preguntas y ayudarte con
                  tu reserva.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Ubicación
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Vereda El Refugio, Km 5 Vía Campestre
                      <br />
                      Municipio Campestre, Departamento, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+573001234567"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      +57 300 123 4567
                    </a>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      WhatsApp disponible
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:reservas@villaroli.com"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      reservas@villaroli.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Horario de Atención
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Lunes a Domingo: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-2xl h-64 flex items-center justify-center border border-border">
                <p className="font-body text-muted-foreground">
                  Mapa interactivo próximamente
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
