import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BedDouble, Bath } from "lucide-react";
import cabinAurora from "@/assets/cabin-aurora.jpg";
import cabinSerena from "@/assets/cabin-serena.jpg";
import cabinMontana from "@/assets/cabin-montana.jpg";

const cabins = [
  {
    name: "Cabaña Aurora",
    slug: "aurora",
    image: cabinAurora,
    description:
      "Lujo y calidez con vistas espectaculares a las montañas. Perfecta para parejas que buscan romance.",
    guests: 2,
    beds: 1,
    baths: 1,
    price: "450.000",
  },
  {
    name: "Cabaña Serena",
    slug: "serena",
    image: cabinSerena,
    description:
      "Un oasis de tranquilidad con jacuzzi privado entre los árboles. Ideal para reconectar.",
    guests: 4,
    beds: 2,
    baths: 1,
    price: "650.000",
  },
  {
    name: "Cabaña Montaña",
    slug: "montana",
    image: cabinMontana,
    description:
      "Arquitectura A-frame moderna con ventanales panorámicos. La experiencia definitiva en la montaña.",
    guests: 6,
    beds: 3,
    baths: 2,
    price: "850.000",
  },
];

export function CabinsPreviewSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
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
            Nuestras Cabañas Exclusivas
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tres espacios únicos diseñados para ofrecerte la experiencia perfecta
            en armonía con la naturaleza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/alojamiento/${cabin.slug}`} className="block">
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={cabin.image}
                      alt={cabin.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-gold text-primary-foreground text-sm font-semibold rounded-full">
                        Desde ${cabin.price} COP/noche
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cabin.name}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {cabin.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex gap-6 pt-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users size={18} />
                        <span className="text-sm">{cabin.guests} Huéspedes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble size={18} />
                        <span className="text-sm">{cabin.beds} Camas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={18} />
                        <span className="text-sm">{cabin.baths} Baños</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-gold transition-colors">
                        Ver detalles
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            <Link to="/alojamiento">Ver Todas las Cabañas</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
