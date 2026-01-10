import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, User } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";

const blogPosts = [
  {
    slug: "mejores-rutas-senderismo-colombia",
    title: "Las Mejores Rutas de Senderismo Cerca de Villa Roli",
    excerpt:
      "Descubre los senderos más impresionantes que puedes recorrer durante tu estadía. Desde caminatas suaves hasta rutas de alta montaña.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
    author: "Equipo Villa Roli",
    date: "15 Dic 2025",
    category: "Aventura",
  },
  {
    slug: "desconexion-digital-naturaleza",
    title: "El Arte de la Desconexión Digital en la Naturaleza",
    excerpt:
      "Cómo aprovechar tu estadía para hacer un verdadero detox digital y reconectar con lo que realmente importa.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    author: "María González",
    date: "10 Dic 2025",
    category: "Bienestar",
  },
  {
    slug: "gastronomia-region-cafetera",
    title: "Sabores de la Región Cafetera: Gastronomía Local",
    excerpt:
      "Un recorrido por los sabores auténticos de nuestra región. Desde el café de origen hasta los platos tradicionales.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    author: "Carlos Martínez",
    date: "5 Dic 2025",
    category: "Gastronomía",
  },
  {
    slug: "observacion-aves-colombia",
    title: "Avistamiento de Aves: Colombia, Paraíso de Biodiversidad",
    excerpt:
      "Colombia es el país con más especies de aves del mundo. Te contamos qué especies puedes encontrar en Villa Roli.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800",
    author: "Equipo Villa Roli",
    date: "28 Nov 2025",
    category: "Naturaleza",
  },
  {
    slug: "escapadas-romanticas-parejas",
    title: "Guía Completa: Escapadas Románticas en Cabaña",
    excerpt:
      "Ideas y consejos para planear la escapada romántica perfecta. Desde actividades hasta sorpresas especiales.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    author: "Ana Rodríguez",
    date: "20 Nov 2025",
    category: "Romance",
  },
  {
    slug: "sostenibilidad-turismo-responsable",
    title: "Turismo Sostenible: Nuestro Compromiso con el Planeta",
    excerpt:
      "Conoce las prácticas sostenibles que implementamos en Villa Roli para minimizar nuestro impacto ambiental.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    author: "Equipo Villa Roli",
    date: "15 Nov 2025",
    category: "Sostenibilidad",
  },
];

const categoryColors: Record<string, string> = {
  Aventura: "bg-primary text-primary-foreground",
  Bienestar: "bg-gold text-foreground",
  Gastronomía: "bg-earth text-cream-light",
  Naturaleza: "bg-forest-light text-cream-light",
  Romance: "bg-cta text-white",
  Sostenibilidad: "bg-primary text-primary-foreground",
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blogHero}
            alt="Blog Villa Roli"
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
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream-light">
              Historias & Consejos
            </h1>
            <p className="font-body text-cream-light/80 text-lg mt-4 max-w-2xl mx-auto">
              Inspiración para tu próxima aventura. Consejos de viaje, guías
              locales y todo lo que necesitas saber para disfrutar al máximo tu
              estadía.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-cta/50 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[post.category]}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-cta transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="font-body text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-cta transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
