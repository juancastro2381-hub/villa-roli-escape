import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const Terminos = () => {
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Términos y Condiciones
            </h1>
            <p className="font-body text-muted-foreground text-lg mt-6">
              Última actualización: Enero 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:font-body prose-li:text-muted-foreground"
          >
            <h2>1. Reservas y Pagos</h2>
            <p>
              Para confirmar una reserva en Villa Roli, se requiere un depósito del
              50% del valor total de la estadía. El saldo restante debe ser pagado
              al momento del check-in. Aceptamos pagos mediante transferencia
              bancaria, tarjeta de crédito y débito.
            </p>

            <h2>2. Política de Cancelación</h2>
            <ul>
              <li>
                <strong>Más de 7 días antes:</strong> Reembolso del 100% del depósito
              </li>
              <li>
                <strong>Entre 3-7 días antes:</strong> Reembolso del 50% del depósito
              </li>
              <li>
                <strong>Menos de 48 horas:</strong> Sin reembolso
              </li>
              <li>
                <strong>No presentación:</strong> Sin reembolso
              </li>
            </ul>

            <h2>3. Check-in y Check-out</h2>
            <p>
              El horario de check-in es a partir de las 3:00 PM. El check-out debe
              realizarse antes de las 12:00 PM. Se pueden solicitar horarios
              flexibles sujetos a disponibilidad y cargo adicional.
            </p>

            <h2>4. Capacidad Máxima</h2>
            <p>
              Cada cabaña tiene una capacidad máxima específica que no puede ser
              excedida. Los huéspedes adicionales no registrados no están permitidos
              y pueden resultar en la cancelación inmediata de la reserva sin
              reembolso.
            </p>

            <h2>5. Normas de Conducta</h2>
            <ul>
              <li>No se permiten fiestas ni eventos sin autorización previa</li>
              <li>
                Se debe mantener el ruido a niveles moderados, especialmente entre
                las 10:00 PM y 8:00 AM
              </li>
              <li>
                Está prohibido fumar dentro de las cabañas (áreas designadas
                disponibles)
              </li>
              <li>
                Las mascotas deben ser declaradas al momento de la reserva (cargo
                adicional puede aplicar)
              </li>
            </ul>

            <h2>6. Responsabilidad sobre Daños</h2>
            <p>
              Los huéspedes son responsables de cualquier daño causado a la propiedad
              durante su estadía. Villa Roli se reserva el derecho de cargar a la
              tarjeta de crédito proporcionada cualquier costo de reparación o
              reemplazo.
            </p>

            <h2>7. Objetos de Valor</h2>
            <p>
              Villa Roli no se hace responsable por la pérdida o daño de objetos de
              valor dejados en las cabañas. Recomendamos utilizar las cajas fuertes
              disponibles en cada alojamiento.
            </p>

            <h2>8. Fuerza Mayor</h2>
            <p>
              Villa Roli no será responsable por incumplimientos causados por
              circunstancias fuera de nuestro control, incluyendo pero no limitado
              a desastres naturales, pandemias, o restricciones gubernamentales.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones
              en cualquier momento. Las modificaciones entrarán en vigor desde su
              publicación en el sitio web.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos, puede contactarnos en:
            </p>
            <p>
              <strong>Email:</strong> reservavillaroli.toca@gmail.com<br />
              <strong>Teléfono:</strong> +57 322 972 6625
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terminos;
