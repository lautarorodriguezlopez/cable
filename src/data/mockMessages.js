export const mockMessages = [
  {
    id: 1,
    sender: 'user',
    text: 'hoy arranqué el día de mierda, me desperté con el mensaje del jefe sobre el presupuesto y ya sé que va a ser una semana larga',
    time: '09:42',
  },
  {
    id: 2,
    sender: 'cable',
    text: 'Entendido. Empezás la semana con presión encima desde temprano. ¿Es la primera vez esta semana que sentís que algo te carga antes de arrancar, o viene de días anteriores?',
    time: '09:42',
    insight: {
      type: 'pattern',
      text: 'Patrón detectado: tensión laboral → inicio del día'
    }
  },
  {
    id: 3,
    sender: 'user',
    text: 'viene de antes, el martes también fue así. dormí mal dos noches seguidas',
    time: '09:45',
  },
  {
    id: 4,
    sender: 'cable',
    text: 'Dos noches seguidas de mal sueño más presión laboral es una combinación pesada. Registré el sueño como variable del día de hoy. Cuando terminés el día, te cuento cómo quedó el mapa de esta semana.',
    time: '09:46',
    insight: {
      type: 'variable',
      text: 'Variable registrada: calidad de sueño · bajo'
    }
  }
];
