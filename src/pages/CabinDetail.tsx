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
  Flame,
  Sparkles,
  Mountain,
  Coffee,
  Utensils,
  ArrowLeft,
  Check,
  Camera,
} from "lucide-react";
import cabinAurora from "@/assets/cabin-aurora.jpg";
import cabinSerena from "@/assets/cabin-serena.jpg";
import cabinMontana from "@/assets/cabin-montana.jpg";
import cabana1 from "@/assets/cabana-1.jpg";
import cabana2 from "@/assets/cabana-2.jpg";
import cabana3 from "@/assets/cabana-3.jpg";
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
  aurora: {
    name: "Cabaña Aurora",
    image: cabinAurora,
    tagline: "Donde el amor encuentra su refugio",
    description: `La Cabaña Aurora es nuestro espacio más íntimo y romántico. Diseñada especialmente para parejas que buscan escapar de la rutina y reconectar, esta cabaña ofrece una experiencia única con vistas privilegiadas al amanecer sobre las montañas.

Con acabados en madera natural, una chimenea que crepita suavemente en las noches frescas, y un jacuzzi privado con vista panorámica, cada momento aquí se convierte en un recuerdo imborrable.`,
    guests: 2,
    beds: 1,
    baths: 1,
    price: "450.000",
    gallery: [
      { src: cabinAurora, alt: "Cabaña Aurora - Vista principal" },
      { src: galleryNight, alt: "Villa Roli de noche" },
      { src: galleryFirepit, alt: "Fogata exterior" },
      { src: poolNight, alt: "Piscina de noche" },
      { src: galleryAerial, alt: "Vista aérea de la finca" },
      { src: galleryDining, alt: "Área de comedor" },
    ],
    amenities: [
      { icon: Wifi, name: "Wi-Fi de alta velocidad" },
      { icon: Flame, name: "Chimenea privada" },
      { icon: Sparkles, name: "Jacuzzi con vista" },
      { icon: Mountain, name: "Terraza panorámica" },
      { icon: Coffee, name: "Cafetera premium" },
    ],
    features: [
      "Cama king size con ropa de cama de lujo",
      "Baño completo con ducha de lluvia",
      "Mini cocina equipada",
      "Calefacción central",
      "Smart TV con streaming",
      "Desayuno incluido",
      "Servicio de habitación disponible",
      "Amenities de baño premium",
    ],
  },
  serena: {
    name: "Cabaña Serena",
    image: cabinSerena,
    tagline: "Tu santuario entre las copas de los árboles",
    description: `Elevada entre los árboles, la Cabaña Serena ofrece una experiencia única de conexión con la naturaleza. Perfecta para familias pequeñas o grupos de amigos, combina el encanto de una casa del árbol con todas las comodidades del hogar.

El jacuzzi al aire libre, rodeado de vegetación tropical y decorado con luces mágicas, crea una atmósfera de ensueño que transforma cada noche en una celebración.`,
    guests: 4,
    beds: 2,
    baths: 1,
    price: "650.000",
    gallery: [
      { src: cabinSerena, alt: "Cabaña Serena - Vista principal" },
      { src: cabana1, alt: "Interior de la cabaña" },
      { src: galleryPoolFull, alt: "Piscina completa" },
      { src: galleryTerrace, alt: "Terraza social" },
      { src: galleryBar, alt: "Bar al aire libre" },
      { src: poolDay, alt: "Piscina durante el día" },
    ],
    amenities: [
      { icon: Wifi, name: "Wi-Fi de alta velocidad" },
      { icon: Sparkles, name: "Jacuzzi exterior" },
      { icon: Mountain, name: "Vista al bosque" },
      { icon: Coffee, name: "Área de café y té" },
      { icon: Utensils, name: "Cocina completa" },
    ],
    features: [
      "Habitación principal con cama queen",
      "Segunda habitación con dos camas individuales",
      "Sala de estar con sofá cama",
      "Cocina totalmente equipada",
      "Terraza envolvente",
      "Parrilla para BBQ",
      "Juegos de mesa incluidos",
      "Hamacas y zonas de descanso",
    ],
  },
  montana: {
    name: "Cabaña Montaña",
    image: cabinMontana,
    tagline: "Arquitectura que abraza el paisaje",
    description: `La Cabaña Montaña representa la fusión perfecta entre diseño contemporáneo y naturaleza salvaje. Su icónica estructura A-frame con ventanales de piso a techo te sumerge en un panorama de 180 grados del paisaje cafetero colombiano.

Ideal para grupos familiares o de amigos, ofrece amplios espacios sociales, múltiples habitaciones y todas las comodidades para una estadía prolongada sin sacrificar el contacto con el entorno natural.`,
    guests: 6,
    beds: 3,
    baths: 2,
    price: "850.000",
    gallery: [
      { src: cabinMontana, alt: "Cabaña Montaña - Vista principal" },
      { src: cabana2, alt: "Interior de la cabaña" },
      { src: cabana3, alt: "Vista desde la terraza" },
      { src: galleryAerial, alt: "Vista aérea de Villa Roli" },
      { src: galleryParking, alt: "Zona de parqueadero" },
      { src: galleryFirepit, alt: "Área de fogata" },
      { src: galleryTerrace, alt: "Terraza común" },
      { src: galleryPoolFull, alt: "Vista completa de la piscina" },
    ],
    amenities: [
      { icon: Wifi, name: "Wi-Fi de alta velocidad" },
      { icon: Flame, name: "Chimenea central" },
      { icon: Sparkles, name: "Jacuzzi privado" },
      { icon: Mountain, name: "Vista panorámica 180°" },
      { icon: Coffee, name: "Estación de café" },
      { icon: Utensils, name: "Cocina gourmet" },
    ],
    features: [
      "Suite principal con baño en suite",
      "Dos habitaciones adicionales",
      "Gran sala de estar con techo abovedado",
      "Cocina gourmet totalmente equipada",
      "Comedor para 8 personas",
      "Zona de fogata exterior",
      "Estacionamiento privado",
      "Servicio de concierge",
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
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
