// app/src/utils/chineseZodiac.js
const zodiacSigns = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
const elements = ['Madera', 'Fuego', 'Tierra', 'Metal', 'Agua'];

export const getChineseZodiac = (year) => {
  const baseYear = 1900;
  const index = (year - baseYear) % 12;
  return zodiacSigns[index];
};

export const getElement = (year) => {
  const baseYear = 1900;
  const elementIndex = Math.floor(((year - baseYear) % 10) / 2);
  return elements[elementIndex];
};

export const getDailyHoroscope = (sign, hour) => {
  // Lógica para predicciones según signo y hora
  return {
    love: '💕 Excelente día para el romance',
    work: '📈 Nuevas oportunidades laborales',
    health: '🧘 Cuida tu energía',
    luckyNumber: Math.floor(Math.random() * 9) + 1,
    luckyColor: '#FFD700',
  };
};
