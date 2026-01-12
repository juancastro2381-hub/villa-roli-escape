import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BedDouble, Bath, Wifi, Fan, Utensils, Tv, Sun, Home, Waves, CheckCircle, Clock } from "lucide-react";
import cabin1 from "@/assets/cabin-1.jpg";
import cabin2 from "@/assets/cabin-2.jpg";
import cabin3 from "@/assets/cabin-3.jpg";
import heroImage from "@/assets/hero-cabin.jpg";
import villaAerial from "@/assets/villa-aerial.jpg";
import poolDay from "@/assets/pool-day.jpg";

// Datos de las acomodaciones (cabañas como parte de la finca)
const acomodaciones = [
  {
    name: "Cabaña 1 - Familiar",
    image: cabin1,
    description:
      "La cabaña más completa. Con sala de estar, TV, cocina integral, nevera. Perfecta para familias grandes.",
    guests: 12,
    beds: 4,
    baths: 2,
    amenities: [Tv, Utensils, Fan, Wifi],
    features: ["Sala TV", "Cocina integral", "Nevera", "2 Baños", "Ventiladores", "Sofá cama"],
  },
  {
    name: "Cabaña 2 - Grupal",
    image: cabin2,
    description:
      "Ideal para grupos grandes. Con 8 camas dobles, 4 camas sencillas y amplia terraza con columpio.",
    guests: 20,
    beds: 8,
    baths: 1,
    amenities: [Fan, Wifi],
    features: ["8 Camas dobles", "4 Camas sencillas", "Terraza", "Columpio", "Ventiladores"],
  },
  {
    name: "Cabaña 3 - Económica",
    image: cabin3,
    description:
      "Opción cómoda y accesible con baño privado y ventiladores. Ideal para grupos pequeños.",
    guests: 5,
    beds: 2,
    baths: 1,
    amenities: [Fan],
    features: ["1 Cama doble", "1 Camarote", "1 Baño", "Ventiladores"],
  },
];

// Servicios incluidos en ambas opciones
const serviciosIncluidos = [
  "Piscina para adultos",
  "Piscina para niños",
  "Jacuzzi",
  "Zonas verdes",
  "Parqueadero privado",
  "Zona BBQ",
  "WiFi disponible",
];

const Alojamiento = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Alojamiento en Villa Roli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-cta/20 backdrop-blur-sm rounded-full text-gold font-body text-sm tracking-wider uppercase mb-4">
              Alojamiento
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
              Reserva Villa Roli
            </h1>
            <p className="font-body text-cream-light/80 text-lg mt-4 max-w-2xl mx-auto">
              Dos opciones para disfrutar: alquila toda la finca o ven por el día.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opciones de Reserva */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-cta font-body text-sm tracking-wider uppercase">
              Elige tu experiencia
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Nuestras Opciones de Reserva
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Finca Completa */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden border-2 border-gold shadow-2xl h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={villaAerial}
                    alt="Finca Completa Villa Roli"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-gold text-foreground font-bold rounded-full shadow-lg">
                      ⭐ OPCIÓN EXCLUSIVA
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <Home className="w-8 h-8 text-gold" />
                      <h3 className="font-display text-3xl font-bold text-cream-light">
                        Finca Completa
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                    Alquila toda Villa Roli para ti y tu grupo. Incluye las 3 cabañas con capacidad total para <strong className="text-foreground">hasta 37 personas</strong>, todas las zonas comunes, piscinas y servicios exclusivos.
                  </p>

                  {/* Capacidad total */}
                  <div className="flex flex-wrap gap-6 py-4 border-y border-border mb-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <Users size={22} className="text-gold" />
                      <span className="font-body font-medium">Hasta 37 Personas</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <BedDouble size={22} className="text-gold" />
                      <span className="font-body font-medium">3 Cabañas</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Bath size={22} className="text-gold" />
                      <span className="font-body font-medium">4 Baños</span>
                    </div>
                  </div>

                  {/* Incluye */}
                  <div className="space-y-3 mb-6 flex-1">
                    <p className="font-display font-semibold text-foreground">Incluye:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviciosIncluidos.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-body text-muted-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precio y CTA */}
                  <div className="bg-primary rounded-2xl p-6 text-center mb-6">
                    <p className="text-cream-light/80 font-body text-sm mb-1">Desde</p>
                    <p className="font-display text-4xl font-bold text-gold">$980.000 COP</p>
                    <p className="text-cream-light/60 font-body text-sm mt-1">por noche</p>
                  </div>

                  <Button asChild size="lg" className="w-full font-bold py-6 text-lg">
                    <Link to="/reservas">
                      Reservar Finca Completa
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Pasadía */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-cta/50 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={poolDay}
                    alt="Pasadía en Villa Roli"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-cta text-white font-bold rounded-full shadow-lg">
                      ☀️ PLAN DEL DÍA
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <Sun className="w-8 h-8 text-gold" />
                      <h3 className="font-display text-3xl font-bold text-cream-light">
                        Pasadía
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                    Disfruta un día completo en Villa Roli sin hospedarte. Acceso a piscinas, zonas verdes, jacuzzi y todas las áreas comunes. Ideal para celebraciones y paseos familiares.
                  </p>

                  {/* Info rápida */}
                  <div className="flex flex-wrap gap-6 py-4 border-y border-border mb-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock size={22} className="text-gold" />
                      <span className="font-body font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Users size={22} className="text-gold" />
                      <span className="font-body font-medium">Hasta 50 personas</span>
                    </div>
                  </div>

                  {/* Incluye */}
                  <div className="space-y-3 mb-6 flex-1">
                    <p className="font-display font-semibold text-foreground">Incluye:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Piscina adultos", "Piscina niños", "Jacuzzi", "Zonas verdes", "Parqueadero", "Baños y duchas"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span className="font-body text-muted-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precio y CTA */}
                  <div className="bg-secondary rounded-2xl p-6 text-center mb-6">
                    <p className="text-muted-foreground font-body text-sm mb-1">Por persona</p>
                    <p className="font-display text-4xl font-bold text-gold">$30.000 COP</p>
                    <p className="text-muted-foreground font-body text-sm mt-1">Niños menores de 3 años gratis</p>
                  </div>

                  <Button asChild size="lg" className="w-full font-bold py-6 text-lg">
                    <Link to="/alojamiento/pasadias">
                      Ver Detalles del Pasadía
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acomodaciones (Cabañas como referencia) */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-cta font-body text-sm tracking-wider uppercase">
              Distribución de la Finca
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Nuestras Acomodaciones
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Al reservar la finca completa, tendrás acceso a las 3 cabañas con capacidad total para 37 personas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acomodaciones.map((cabin, index) => (
              <motion.div
                key={cabin.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border"
              >
                <div className="relative h-48">
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-foreground text-sm font-bold rounded-full">
                      {cabin.guests} personas
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {cabin.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-4">
                    {cabin.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <BedDouble size={16} className="text-gold" />
                      <span>{cabin.beds} camas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} className="text-gold" />
                      <span>{cabin.baths} baño{cabin.baths > 1 ? "s" : ""}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {cabin.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-secondary text-xs font-body text-muted-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="font-body text-muted-foreground mb-4">
              Todas las cabañas están incluidas al reservar la finca completa.
            </p>
            <Button asChild size="lg" className="font-bold px-10">
              <Link to="/reservas">Reservar Finca Completa</Link>
            </Button>
          </motion.div>
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
              Contáctanos ahora y asegura tu experiencia en Villa Roli
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-bold px-10"
              >
                <Link to="/reservas">Reservar Ahora</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="font-bold px-10"
              >
                <a href="https://wa.me/573229726625" target="_blank" rel="noopener noreferrer">
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