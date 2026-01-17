// PRECIOS 2025 - Villa Roli

export const WHATSAPP_NUMBER = "3229726625";

// Hora adicional (para entrada temprana o salida tarde)
export const HORA_ADICIONAL = 50000;

// =====================
// PASADÍAS (8 AM - 5 PM)
// Solo exteriores, no se habilitan cabañas
// =====================
export const PASADIA_PRICES = {
  finDeSemana: 20000, // Viernes a Domingo (sin festivo)
  entreSemana: 15000, // Lunes a Jueves
};

export const PASADIA_INFO = {
  horario: "8:00 AM - 5:00 PM",
  nota: "No se habilitan las cabañas, solo zonas exteriores",
  incluye: [
    "Acceso a piscina para adultos",
    "Acceso a piscina para niños", 
    "Zonas verdes y jardines",
    "Parqueadero privado",
    "Zona de BBQ disponible",
    "Sillas y mesas de descanso",
    "Baños y duchas",
  ],
};

// =====================
// NOCHES - FINCA COMPLETA (2 PM - 1 PM)
// Por persona, grupos
// =====================
export const NOCHES_PRICES = {
  entreSemana: {
    precio: 50000, // Lunes a Jueves
    minimoPersonas: 10,
  },
  finDeSemana: {
    precio: 55000, // Viernes a Domingo (sin festivo)
    minimoPersonas: 10,
  },
  festivo: {
    precio: 60000, // Fin de semana con festivo o día festivo
    minimoPersonas: 15,
  },
};

export const NOCHES_INFO = {
  horario: "Ingreso: 2:00 PM - Salida: 1:00 PM",
  aseo: 65000, // No incluido en el precio por persona
  nota: "No incluye el valor del aseo ($65.000)",
  cabanas: [
    { nombre: "Cabaña 1", capacidad: 12, camas: "4 habitaciones" },
    { nombre: "Cabaña 2", capacidad: 15, camas: "5 habitaciones" },
    { nombre: "Cabaña 3", capacidad: 10, camas: "3 habitaciones" },
  ],
};

// =====================
// PLAN FAMILIA (2 PM - 1 PM)
// Solo cabaña #3, máximo 5 personas
// =====================
export const PLAN_FAMILIA = {
  precio: 350000,
  maxPersonas: 5,
  cabana: "Cabaña #3",
  horario: "Ingreso: 2:00 PM - Salida: 1:00 PM",
  incluye: [
    "Hospedaje en Cabaña #3",
    "Valor del aseo incluido",
    "Acceso a piscinas",
    "Zonas verdes",
    "Parqueadero",
  ],
};

// =====================
// PLAN PAREJA (2 PM - 1 PM)
// Cabaña #3, incluye extras románticos
// =====================
export const PLAN_PAREJA = {
  precio: 370000,
  maxPersonas: 2,
  cabana: "Cabaña #3",
  horario: "Ingreso: 2:00 PM - Salida: 1:00 PM",
  incluye: [
    "Hospedaje en Cabaña #3",
    "Valor del aseo incluido",
    "2 cervezas de bienvenida",
    "Decoración según ocasión",
    "Acceso a piscinas",
    "Zonas verdes",
    "Parqueadero",
  ],
};

// Tipos de reserva disponibles
export type TipoReserva = 
  | "pasadia-entre-semana"
  | "pasadia-fin-semana"
  | "noches-entre-semana"
  | "noches-fin-semana"
  | "noches-festivo"
  | "plan-familia"
  | "plan-pareja";

export const TIPO_RESERVA_LABELS: Record<TipoReserva, string> = {
  "pasadia-entre-semana": "Pasadía Entre Semana (Lun-Jue)",
  "pasadia-fin-semana": "Pasadía Fin de Semana (Vie-Dom)",
  "noches-entre-semana": "Finca Completa - Entre Semana",
  "noches-fin-semana": "Finca Completa - Fin de Semana",
  "noches-festivo": "Finca Completa - Festivo",
  "plan-familia": "Plan Familia (máx. 5 personas)",
  "plan-pareja": "Plan Pareja (2 personas)",
};

// Función para calcular precio estimado
export function calcularPrecio(
  tipo: TipoReserva,
  personas: number,
  noches: number = 1
): { subtotal: number; aseo: number; total: number; descripcion: string } {
  let subtotal = 0;
  let aseo = 0;
  let descripcion = "";

  switch (tipo) {
    case "pasadia-entre-semana":
      subtotal = PASADIA_PRICES.entreSemana * personas;
      descripcion = `${personas} personas × $${PASADIA_PRICES.entreSemana.toLocaleString()}`;
      break;
    case "pasadia-fin-semana":
      subtotal = PASADIA_PRICES.finDeSemana * personas;
      descripcion = `${personas} personas × $${PASADIA_PRICES.finDeSemana.toLocaleString()}`;
      break;
    case "noches-entre-semana":
      subtotal = NOCHES_PRICES.entreSemana.precio * personas * noches;
      aseo = NOCHES_INFO.aseo;
      descripcion = `${personas} personas × ${noches} noche(s) × $${NOCHES_PRICES.entreSemana.precio.toLocaleString()} + aseo`;
      break;
    case "noches-fin-semana":
      subtotal = NOCHES_PRICES.finDeSemana.precio * personas * noches;
      aseo = NOCHES_INFO.aseo;
      descripcion = `${personas} personas × ${noches} noche(s) × $${NOCHES_PRICES.finDeSemana.precio.toLocaleString()} + aseo`;
      break;
    case "noches-festivo":
      subtotal = NOCHES_PRICES.festivo.precio * personas * noches;
      aseo = NOCHES_INFO.aseo;
      descripcion = `${personas} personas × ${noches} noche(s) × $${NOCHES_PRICES.festivo.precio.toLocaleString()} + aseo`;
      break;
    case "plan-familia":
      subtotal = PLAN_FAMILIA.precio;
      descripcion = `Plan Familia (hasta ${PLAN_FAMILIA.maxPersonas} personas, aseo incluido)`;
      break;
    case "plan-pareja":
      subtotal = PLAN_PAREJA.precio;
      descripcion = `Plan Pareja (${PLAN_PAREJA.maxPersonas} personas, todo incluido)`;
      break;
  }

  return { subtotal, aseo, total: subtotal + aseo, descripcion };
}

// Validar mínimo de personas
export function validarMinimoPersonas(tipo: TipoReserva, personas: number): { valido: boolean; mensaje: string } {
  switch (tipo) {
    case "noches-entre-semana":
      if (personas < NOCHES_PRICES.entreSemana.minimoPersonas) {
        return { 
          valido: false, 
          mensaje: `Mínimo ${NOCHES_PRICES.entreSemana.minimoPersonas} personas para entre semana` 
        };
      }
      break;
    case "noches-fin-semana":
      if (personas < NOCHES_PRICES.finDeSemana.minimoPersonas) {
        return { 
          valido: false, 
          mensaje: `Mínimo ${NOCHES_PRICES.finDeSemana.minimoPersonas} personas para fin de semana` 
        };
      }
      break;
    case "noches-festivo":
      if (personas < NOCHES_PRICES.festivo.minimoPersonas) {
        return { 
          valido: false, 
          mensaje: `Mínimo ${NOCHES_PRICES.festivo.minimoPersonas} personas para festivos` 
        };
      }
      break;
    case "plan-familia":
      if (personas > PLAN_FAMILIA.maxPersonas) {
        return { 
          valido: false, 
          mensaje: `Máximo ${PLAN_FAMILIA.maxPersonas} personas para Plan Familia` 
        };
      }
      break;
    case "plan-pareja":
      if (personas > PLAN_PAREJA.maxPersonas) {
        return { 
          valido: false, 
          mensaje: `Máximo ${PLAN_PAREJA.maxPersonas} personas para Plan Pareja` 
        };
      }
      break;
  }
  return { valido: true, mensaje: "" };
}
