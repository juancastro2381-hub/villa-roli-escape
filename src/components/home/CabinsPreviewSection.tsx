import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BedDouble, Bath, Star } from "lucide-react";
import cabin1 from "@/assets/cabin-1.jpg";
import cabin2 from "@/assets/cabin-2.jpg";
import cabin3 from "@/assets/cabin-3.jpg";

const cabins = [
  {
    name: "Cabaña 1 - Familiar",
    slug: "cabana-1",
    image: cabin1,
    description:
      "La más completa. Con sala, cocina integral, TV, nevera y capacidad para 12 personas. Ideal para familias grandes.",
    guests: 12,
    beds: 4,
    baths: 2,
    price: "350.000",
    features: ["Cocina integral", "Sala TV", "Nevera", "2 Baños"],
    popular: true,
  },
  {
    name: "Cabaña 2 - Grupal",
    slug: "cabana-2",
    image: cabin2,
    description:
      "Perfecta para grupos grandes. Con terraza, columpio y amplio espacio para 20 personas. Ventiladores incluidos.",
    guests: 20,
    beds: 8,
    baths: 1,
    price: "450.000",
    features: ["8 Camas dobles", "Terraza", "Columpio", "Ventiladores"],
    popular: false,
  },
  {
    name: "Cabaña 3 - Económica",
    slug: "cabana-3",
    image: cabin3,
    description:
      "Opción cómoda y accesible para grupos pequeños de hasta 5 personas. Con baño privado y ventiladores.",
    guests: 5,
    beds: 2,
    baths: 1,
    price: "180.000",
    features: ["2 Camas", "1 Baño", "Ventiladores", "Económica"],
    popular: false,
  },
];

export function CabinsPreviewSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-wider uppercase">
            Alojamientos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Nuestras Cabañas
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Tres opciones para todos los gustos y presupuestos. Todas incluyen acceso a piscina y zonas comunes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/alojamiento/${cabin.slug}`} className="block h-full">
                <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 h-full flex flex-col relative">
                  {/* Popular Badge */}
                  {cabin.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gold text-primary font-bold text-xs rounded-full shadow-lg">
                        <Star size={12} fill="currentColor" />
                        MÁS POPULAR
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={cabin.image}
                      alt={cabin.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <p className="text-cream-light/70 text-sm font-body">Desde</p>
                        <p className="text-cream-light font-display text-3xl font-bold">
                          ${cabin.price}
                          <span className="text-sm font-normal text-cream-light/70"> COP/noche</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {cabin.name}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed flex-1">
                      {cabin.description}
                    </p>

                    {/* Features Pills */}
                    <div className="flex flex-wrap gap-2">
                      {cabin.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 bg-secondary text-xs font-body text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 pt-4 border-t border-border text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-gold" />
                        <span className="text-sm font-medium">{cabin.guests}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BedDouble size={16} className="text-gold" />
                        <span className="text-sm font-medium">{cabin.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath size={16} className="text-gold" />
                        <span className="text-sm font-medium">{cabin.baths}</span>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                          Ver más
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 rounded-full"
            >
              <Link to="/reservas">Reservar Ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 rounded-full"
            >
              <Link to="/alojamiento">Ver Todas las Cabañas</Link>
            </Button>
          </div>
          <p className="text-muted-foreground font-body text-sm">
            💡 ¿Solo quieres pasar el día? <Link to="/alojamiento/pasadias" className="text-gold hover:underline font-semibold">Conoce nuestros pasadías</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
