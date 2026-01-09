import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/ImageGallery";
import {
  Users,
  BedDouble,
  Bath,
  Wifi,
  Fan,
  Tv,
  Utensils,
  ArrowLeft,
  Check,
  Camera,
} from "lucide-react";
import cabin1 from "@/assets/cabin-1.jpg";
import cabin2 from "@/assets/cabin-2.jpg";
import cabin3 from "@/assets/cabin-3.jpg";
import galleryTerrace from "@/assets/gallery-terrace.jpg";
import galleryParking from "@/assets/gallery-parking.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryNight from "@/assets/gallery-night.jpg";
import galleryAerial from "@/assets/gallery-aerial.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryPoolFull from "@/assets/gallery-pool-full.jpg";
import galleryFirepit from "@/assets/gallery-firepit.jpg";
import poolDay from "@/assets/pool-day.jpg";
import poolNight from "@/assets/pool-night.jpg";

const cabinData = {
  "cabana-1": {
    name: "Cabaña 1 - Familiar",
    image: cabin1,
    tagline: "La más completa para familias grandes",
    description: `La Cabaña 1 es nuestra opción más completa en Villa Roli. Diseñada especialmente para familias grandes que buscan comodidad y privacidad.

Con sala de estar equipada con TV, cocina integral con nevera, y capacidad para 12 personas (2 adicionales en sofá cama), esta cabaña ofrece todo lo necesario para una estadía perfecta. Cuenta con 2 baños completos y ventiladores en todas las habitaciones.`,
    guests: 12,
    beds: 4,
    baths: 2,
    price: "350.000",
    gallery: [
      { src: cabin1, alt: "Cabaña 1 - Vista principal" },
      { src: galleryNight, alt: "Villa Roli de noche" },
      { src: galleryFirepit, alt: "Fogata exterior" },
      { src: poolNight, alt: "Piscina de noche" },
      { src: galleryAerial, alt: "Vista aérea de la finca" },
      { src: galleryDining, alt: "Área de comedor" },
    ],
    amenities: [
      { icon: Wifi, name: "Wi-Fi disponible" },
      { icon: Tv, name: "Smart TV" },
      { icon: Utensils, name: "Cocina integral" },
      { icon: Fan, name: "Ventiladores" },
    ],
    features: [
      "Sala de estar con TV",
      "Cocina integral equipada",
      "Nevera grande",
      "2 Baños completos",
      "Ventiladores en todas las habitaciones",
      "Sofá cama para 2 personas adicionales",
      "Capacidad para 12 personas",
      "Acceso a piscina y zonas comunes",
    ],
  },
  "cabana-2": {
    name: "Cabaña 2 - Grupal",
    image: cabin2,
    tagline: "Ideal para grupos grandes y eventos",
    description: `La Cabaña 2 es perfecta para grupos grandes y eventos familiares. Con amplio espacio y capacidad para 20 personas, es nuestra opción más grande.

Cuenta con 8 camas dobles y 4 camas sencillas, amplia terraza con columpio, y ventiladores en todas las áreas. El espacio abierto y fresco la hace ideal para reuniones familiares o de amigos.`,
    guests: 20,
    beds: 8,
    baths: 1,
    price: "450.000",
    gallery: [
      { src: cabin2, alt: "Cabaña 2 - Vista principal" },
      { src: galleryPoolFull, alt: "Piscina completa" },
      { src: galleryTerrace, alt: "Terraza social" },
      { src: galleryBar, alt: "Bar al aire libre" },
      { src: poolDay, alt: "Piscina durante el día" },
      { src: galleryParking, alt: "Zona de parqueadero" },
    ],
    amenities: [
      { icon: Wifi, name: "Wi-Fi disponible" },
      { icon: Fan, name: "Ventiladores" },
    ],
    features: [
      "8 Camas dobles",
      "4 Camas sencillas",
      "Amplia terraza",
      "Columpio exterior",
      "Ventiladores en todas las áreas",
      "Baño completo",
      "Capacidad para 20 personas",
      "Acceso a piscina y zonas comunes",
    ],
  },
  "cabana-3": {
    name: "Cabaña 3 - Económica",
    image: cabin3,
    tagline: "Cómoda y accesible para grupos pequeños",
    description: `La Cabaña 3 es nuestra opción más económica y accesible, ideal para parejas o grupos pequeños de hasta 5 personas.

Con una cama doble y un camarote, baño privado y ventiladores, ofrece todo lo necesario para una estadía agradable sin gastar de más. Perfecta para quienes buscan disfrutar de las instalaciones de Villa Roli con un presupuesto más ajustado.`,
    guests: 5,
    beds: 2,
    baths: 1,
    price: "180.000",
    gallery: [
      { src: cabin3, alt: "Cabaña 3 - Vista principal" },
      { src: galleryAerial, alt: "Vista aérea de Villa Roli" },
      { src: galleryFirepit, alt: "Área de fogata" },
      { src: galleryTerrace, alt: "Terraza común" },
      { src: galleryPoolFull, alt: "Vista completa de la piscina" },
      { src: poolDay, alt: "Piscina de día" },
    ],
    amenities: [
      { icon: Fan, name: "Ventiladores" },
    ],
    features: [
      "1 Cama doble",
      "1 Camarote (2 camas)",
      "Baño privado",
      "Ventiladores",
      "Capacidad para 5 personas",
      "Opción más económica",
      "Acceso a piscina y zonas comunes",
      "Ideal para parejas o grupos pequeños",
    ],
  },
};

const CabinDetail = () => {
  const { cabinId } = useParams();
  const cabin = cabinData[cabinId as keyof typeof cabinData];

  if (!cabin) {
    return <Navigate to="/alojamiento" replace />;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={cabin.image}
          alt={cabin.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/alojamiento"
                className="inline-flex items-center gap-2 text-cream-light/80 hover:text-cream-light mb-4 transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="font-body">Volver a Alojamiento</span>
              </Link>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
                {cabin.name}
              </h1>
              <p className="font-body text-xl text-gold mt-2">{cabin.tagline}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Acerca de esta cabaña
                </h2>
                <div className="font-body text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {cabin.description}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap gap-8 py-6 border-y border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {cabin.guests}
                    </p>
                    <p className="text-sm text-muted-foreground">Huéspedes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <BedDouble size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {cabin.beds}
                    </p>
                    <p className="text-sm text-muted-foreground">Camas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Bath size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {cabin.baths}
                    </p>
                    <p className="text-sm text-muted-foreground">Baños</p>
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Comodidades
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cabin.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
                    >
                      <amenity.icon size={24} className="text-gold" />
                      <span className="font-body text-foreground">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Lo que incluye
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cabin.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 font-body text-muted-foreground"
                    >
                      <Check size={20} className="text-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Photo Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <Camera size={24} className="text-gold" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Galería de Fotos
                  </h2>
                </div>
                <ImageGallery images={cabin.gallery} />
              </motion.div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32 bg-card rounded-2xl p-8 border border-border shadow-xl"
              >
                <div className="text-center mb-6">
                  <p className="text-muted-foreground font-body">Desde</p>
                  <p className="font-display text-4xl font-bold text-foreground">
                    ${cabin.price}
                  </p>
                  <p className="text-muted-foreground font-body">COP / noche</p>
                </div>

                <Button
                  asChild
                  className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold py-6 text-lg mb-4"
                >
                  <Link to="/reservas">Reservar Ahora</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/contacto">Consultar Disponibilidad</Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Sin cargos adicionales. Cancelación gratuita hasta 48h antes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CabinDetail;
