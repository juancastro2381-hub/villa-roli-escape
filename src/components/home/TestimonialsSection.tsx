import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Claudia Patricia",
    location: "Bogotá, Colombia",
    date: "Enero 2025",
    rating: 5,
    text: "Excelente nos sentimos muy tranquilos y cómodos",
    type: "En grupo",
    source: "Airbnb",
  },
  {
    name: "Ana Maria",
    location: "Bogotá, Colombia",
    date: "Abril 2025",
    rating: 5,
    text: "Lugar muy acogedor, la sra Miriam y Alberto muy pendiente, recomendado para disfrutar de las actividades que la finca ofrece, ya sea en familia o con amigos.",
    type: "Con mascota",
    source: "Airbnb",
  },
  {
    name: "Julián",
    location: "Bogotá, Colombia",
    date: "Mayo 2024",
    rating: 5,
    text: "El lugar muy bonito tal cual como se ve en las fotos, mi familia y yo la pasamos muy bien, el lugar muy tranquilo y privado lo recomiendo. Un saludo especial a la señora Miriam que fue muy cordial en todo momento.",
    type: "Con mascota",
    source: "Airbnb",
  },
  {
    name: "Fredy",
    location: "Bogotá, Colombia",
    date: "Julio 2022",
    rating: 5,
    text: "Super recomendado, la finca es muy linda, privado, a 10 minutos del pueblo, la piscina y la zona de asado espectacular, el anfitrión y la señora Miriam muy atentos, con seguridad volveremos.",
    type: "Con niños",
    source: "Airbnb",
  },
  {
    name: "Nicole",
    location: "6 años en Airbnb",
    date: "Julio 2022",
    rating: 5,
    text: "Alberto es un excelente anfitrión muy amable y responderá todas tus dudas sin duda el mejor.",
    type: "Estadía de una noche",
    source: "Airbnb",
  },
  {
    name: "Diana",
    location: "Bogotá, Colombia",
    date: "Junio 2022",
    rating: 5,
    text: "El lugar es muy bonito para el precio es amplio la piscina es grande y limpia es mucho mejor que en fotos.",
    type: "En grupo",
    source: "Airbnb",
  },
  {
    name: "Cesar",
    location: "Funza, Colombia",
    date: "Marzo 2022",
    rating: 5,
    text: "Realmente todo Genial, una experiencia maravillosa que sin duda repetiría! completamente recomendado este lugar para compartir en familia o con amigos ya que permite relajarse sin ruidos o incomodidades. El anfitrión es un amor!",
    type: "En grupo",
    source: "Airbnb",
  },
  {
    name: "Cesar",
    location: "Bogotá, Colombia",
    date: "Febrero 2022",
    rating: 5,
    text: "La mejor experiencia que he tenido, todo gracias a este lugar, no se arrepentirán.",
    type: "En grupo",
    source: "Airbnb",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-body text-sm tracking-wider uppercase">
            Testimonios Reales
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Experiencias verificadas de viajeros que han disfrutado de Villa Roli
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 h-full border border-primary-foreground/20 flex flex-col">
                    <Quote className="w-8 h-8 text-gold mb-4 flex-shrink-0" />

                    <p className="font-body text-primary-foreground/90 leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.text}"
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-gold text-gold" />
                        ))}
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display font-semibold text-primary-foreground">
                            {testimonial.name}
                          </p>
                          <p className="font-body text-xs text-primary-foreground/60">
                            {testimonial.location}
                          </p>
                          <p className="font-body text-xs text-primary-foreground/50 mt-1">
                            {testimonial.date} • {testimonial.type}
                          </p>
                        </div>
                        <span className="font-body text-xs bg-gold/20 text-gold px-2 py-1 rounded-full flex-shrink-0">
                          {testimonial.source}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons */}
            <div className="hidden md:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 hover:text-primary-foreground" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 hover:text-primary-foreground" />
            </div>
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-gold w-6" 
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
