import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BedDouble, Bath, Wifi, Flame, Sparkles, Mountain, Coffee, Utensils } from "lucide-react";
import cabinAurora from "@/assets/cabin-aurora.jpg";
import cabinSerena from "@/assets/cabin-serena.jpg";
import cabinMontana from "@/assets/cabin-montana.jpg";

const cabins = [
  {
    name: "Cabaña Aurora",
    slug: "aurora",
    image: cabinAurora,
    description:
      "Un refugio romántico con vistas espectaculares al amanecer. Diseñada para parejas que buscan intimidad y lujo en medio de la naturaleza. Con chimenea, jacuzzi privado y una terraza panorámica perfecta para contemplar las estrellas.",
    guests: 2,
    beds: 1,
    baths: 1,
    price: "450.000",
    amenities: [Wifi, Flame, Sparkles, Mountain, Coffee],
  },
  {
    name: "Cabaña Serena",
    slug: "serena",
    image: cabinSerena,
    description:
      "Un oasis de paz elevado entre los árboles. Perfecta para familias pequeñas o grupos de amigos que buscan reconectar con la naturaleza. Su jacuzzi al aire libre y las luces mágicas crean una atmósfera inolvidable.",
    guests: 4,
    beds: 2,
    baths: 1,
    price: "650.000",
    amenities: [Wifi, Sparkles, Mountain, Coffee, Utensils],
  },
  {
    name: "Cabaña Montaña",
    slug: "montana",
    image: cabinMontana,
    description:
      "Arquitectura A-frame moderna con ventanales de piso a techo. La experiencia definitiva para grupos que buscan espacio, confort y vistas panorámicas incomparables del paisaje cafetero colombiano.",
    guests: 6,
    beds: 3,
    baths: 2,
    price: "850.000",
    amenities: [Wifi, Flame, Sparkles, Mountain, Coffee, Utensils],
  },
];

const Alojamiento = () => {
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
              Alojamiento
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-3">
              Nuestras Cabañas
            </h1>
            <p className="font-body text-muted-foreground text-lg mt-6 leading-relaxed">
              Tres espacios únicos, cada uno con su propia personalidad y encanto.
              Todas comparten la misma promesa: una experiencia inolvidable en
              armonía con la naturaleza.
            </p>
          </motion.div>
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-gold text-primary-foreground font-semibold rounded-full">
                      Desde ${cabin.price} COP/noche
                    </span>
                  </div>
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
                <div className="flex flex-wrap gap-6 py-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <Users size={20} className="text-gold" />
                    <span className="font-body">{cabin.guests} Huéspedes</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <BedDouble size={20} className="text-gold" />
                    <span className="font-body">{cabin.beds} Camas</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Bath size={20} className="text-gold" />
                    <span className="font-body">{cabin.baths} Baños</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-4">
                  {cabin.amenities.map((Icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center"
                    >
                      <Icon size={24} className="text-primary" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gold hover:bg-gold/90 text-primary font-semibold px-6"
                  >
                    <Link to="/reservas">Reservar</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
    </Layout>
  );
};

export default Alojamiento;
