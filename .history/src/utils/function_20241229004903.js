const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString()
    .padStart(6, 'F')}`;
  return randomColor;
};
export {getRandomColor};
