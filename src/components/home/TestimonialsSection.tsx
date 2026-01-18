import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Diego",
    date: "Diciembre 2024",
    rating: 5,
    text: "La finca es espectacular, tal cual se ve en las fotos. Muy bien dotada y la atención de Camilo fue excelente. Ideal para descansar en familia.",
    source: "Airbnb",
  },
  {
    name: "Marcela",
    date: "Noviembre 2024",
    rating: 5,
    text: "Excelente lugar para desconectarse. La piscina es muy limpia y las cabañas son muy cómodas. Superó nuestras expectativas.",
    source: "Airbnb",
  },
  {
    name: "Camilo",
    date: "Octubre 2024",
    rating: 5,
    text: "Pasamos un fin de semana increíble. El clima de Tocaima es perfecto y la distribución de la finca permite mucha privacidad si vas en grupo.",
    source: "Airbnb",
  },
  {
    name: "Paula",
    date: "Septiembre 2024",
    rating: 5,
    text: "Muy recomendada. Todo estaba impecable a nuestra llegada. El paisaje y la tranquilidad son lo mejor del lugar.",
    source: "Airbnb",
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

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-primary-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-sm text-primary-foreground/70">
                      {testimonial.date}
                    </p>
                  </div>
                  <span className="font-body text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                    {testimonial.source}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
