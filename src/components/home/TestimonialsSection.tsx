import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    location: "Bogotá, Colombia",
    rating: 5,
    text: "Una experiencia mágica. La Cabaña Aurora superó todas nuestras expectativas. El amanecer desde la terraza es simplemente indescriptible.",
  },
  {
    name: "Carlos Rodríguez",
    location: "Medellín, Colombia",
    rating: 5,
    text: "El lugar perfecto para desconectar. La atención al detalle es impresionante y el jacuzzi bajo las estrellas fue el broche de oro de nuestro viaje.",
  },
  {
    name: "Ana Martínez",
    location: "Cali, Colombia",
    rating: 5,
    text: "Villa Roli es un verdadero paraíso. Vinimos en familia y los niños no querían irse. Definitivamente volveremos pronto.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Lo que dicen nuestros huéspedes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-primary-foreground/20">
                <Quote className="w-10 h-10 text-gold mb-4" />

                <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>

                <div>
                  <p className="font-display font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
