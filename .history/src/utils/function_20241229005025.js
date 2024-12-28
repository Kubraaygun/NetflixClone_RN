import {ThemeColors} from '../theme/themeColors';

const getRandomColor = () => {
  switch (key) {
    case 0:
      return ThemeColors.RED;

      break;

    default:
      break;
  }
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString()
    .padStart(6, 'F')}`;
  return randomColor;
};
export {getRandomColor};
