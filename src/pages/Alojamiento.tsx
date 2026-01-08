import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BedDouble, Bath, Wifi, Fan, Utensils, Tv, Sun } from "lucide-react";
import cabana1 from "@/assets/cabana-1.jpg";
import cabana2 from "@/assets/cabana-2.jpg";
import cabana3 from "@/assets/cabana-3.jpg";
import villaPanoramica from "@/assets/villa-panoramica.jpg";

const cabins = [
  {
    name: "Cabaña #1 - Familiar",
    slug: "aurora",
    image: cabana1,
    description:
      "La cabaña más completa de Villa Roli. Con sala de estar, TV, cocina integral, nevera y capacidad para 12 personas (2 adicionales en sofá cama). Perfecta para familias grandes que buscan comodidad y privacidad.",
    guests: 12,
    beds: 4,
    baths: 2,
    price: "350.000",
    amenities: [Tv, Utensils, Fan, Wifi],
    features: ["Sala TV", "Cocina integral", "Nevera", "2 Baños", "Ventiladores", "Sofá cama"],
  },
  {
    name: "Cabaña #2 - Grupal",
    slug: "serena",
    image: cabana2,
    description:
      "Ideal para grupos grandes y eventos familiares. Con 8 camas dobles, 4 camas sencillas y amplia terraza con columpio. Capacidad para 20 personas en un espacio cómodo y fresco.",
    guests: 20,
    beds: 8,
    baths: 1,
    price: "450.000",
    amenities: [Fan, Wifi],
    features: ["8 Camas dobles", "4 Camas sencillas", "Terraza", "Columpio", "Ventiladores"],
  },
  {
    name: "Cabaña #3 - Económica",
    slug: "montana",
    image: cabana3,
    description:
      "Opción cómoda y accesible para parejas o grupos pequeños. Con baño privado, ventiladores y todo lo necesario para una estadía agradable. Capacidad para 5 personas.",
    guests: 5,
    beds: 2,
    baths: 1,
    price: "180.000",
    amenities: [Fan],
    features: ["1 Cama doble", "1 Camarote", "1 Baño", "Ventiladores"],
  },
];

const Alojamiento = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={villaPanoramica}
            alt="Alojamiento en Villa Roli"
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
              Alojamiento
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
              Nuestras Cabañas
            </h1>
            <p className="font-body text-cream-light/80 text-lg mt-4 max-w-2xl mx-auto">
              Tres opciones únicas para todos los gustos. Todas incluyen acceso a piscinas y zonas comunes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pasadías Banner */}
      <section className="bg-gold py-4">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-primary">
              <Sun className="w-6 h-6" />
              <span className="font-body font-semibold">
                ¿Solo quieres pasar el día? Disfruta nuestros <strong>Pasadías desde $30.000 COP</strong>
              </span>
            </div>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              <Link to="/alojamiento/pasadias">Ver Pasadías →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cabins List */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-gold text-primary font-bold rounded-full shadow-lg">
                      Desde ${cabin.price} COP/noche
                    </span>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1.5 bg-primary text-cream-light text-xs font-bold rounded-full">
                        ⭐ MÁS POPULAR
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {cabin.name}
                </h2>

                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {cabin.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-foreground">
                    <Users size={22} className="text-gold" />
                    <span className="font-body font-medium">{cabin.guests} Personas</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <BedDouble size={22} className="text-gold" />
                    <span className="font-body font-medium">{cabin.beds} Camas</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Bath size={22} className="text-gold" />
                    <span className="font-body font-medium">{cabin.baths} Baño{cabin.baths > 1 ? "s" : ""}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {cabin.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-secondary text-sm font-body text-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenities Icons */}
                <div className="flex gap-4">
                  {cabin.amenities.map((Icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"
                    >
                      <Icon size={24} className="text-gold" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold/90 text-primary font-bold px-8 rounded-full"
                  >
                    <Link to="/reservas">Reservar Ahora</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                  >
                    <Link
                      to={`/alojamiento/${cabin.slug}`}
                      className="flex items-center gap-2"
                    >
                      Ver Detalles <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-light mb-4">
              ¿Listo para reservar?
            </h2>
            <p className="font-body text-cream-light/80 text-lg max-w-xl mx-auto mb-8">
              Contáctanos ahora y asegura tu estadía en Villa Roli
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-primary font-bold px-10 rounded-full"
              >
                <Link to="/reservas">Hacer Reserva</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream-light text-cream-light hover:bg-cream-light hover:text-primary rounded-full"
              >
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Alojamiento;
