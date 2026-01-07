import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-16 text-center border border-border shadow-xl"
        >
          <span className="text-gold font-body text-sm tracking-wider uppercase">
            ¿Listo para escapar?
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Tu próxima aventura te espera
          </h2>

          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            No dejes pasar la oportunidad de vivir una experiencia única. Reserva
            ahora y asegura tu lugar en el paraíso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 py-6 text-lg"
            >
              <Link to="/reservas" className="flex items-center gap-2">
                <Calendar size={20} />
                Reservar Ahora
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              <Link to="/contacto" className="flex items-center gap-2">
                <Phone size={20} />
                Contáctanos
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
