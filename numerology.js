// app/src/utils/numerology.js
export const getLifePathNumber = (birthDate) => {
  const digits = birthDate.replace(/\D/g, '').split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  return reduceToSingleDigit(sum);
};

const reduceToSingleDigit = (num) => {
  if (num <= 9) return num;
  const digits = String(num).split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  return reduceToSingleDigit(sum);
};

export const getColorByNumber = (number) => {
  const colorMap = {
    1: '#FF6B6B', // Rojo
    2: '#FFD93D', // Amarillo
    3: '#6BCB77', // Verde
    4: '#4D96FF', // Azul
    5: '#FF6B6B', // Naranja
    6: '#9B59B6', // Púrpura
    7: '#F39C12', // Dorado
    8: '#2ECC71', // Verde esmeralda
    9: '#E74C3C', // Rojo intenso
  };
  return colorMap[number] || '#FFFFFF';
};
