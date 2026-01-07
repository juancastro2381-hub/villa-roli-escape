import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cabin.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Villa Roli - Cabañas de lujo en la naturaleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full text-gold font-body text-sm tracking-wider uppercase">
            Exclusividad & Naturaleza
          </span>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-light leading-tight">
            Tu refugio de paz
            <br />
            <span className="text-gold">en la montaña</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-cream-light/90 max-w-2xl mx-auto leading-relaxed">
            Descubre Villa Roli, donde el lujo se encuentra con la naturaleza.
            Cabañas exclusivas rodeadas de paisajes espectaculares para una
            experiencia inolvidable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 py-6 text-lg"
            >
              <Link to="/reservas">Reservar Ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream-light/50 text-cream-light hover:bg-cream-light/10 px-8 py-6 text-lg"
            >
              <Link to="/alojamiento">Explorar Cabañas</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-cream-light/70"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
