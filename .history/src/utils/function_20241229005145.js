import {ThemeColors} from '../theme/themeColors';

const getRandomColor = index => {
  switch (index % 10) {
    case 0:
      return ThemeColors.RED;
    case 1:
      return ThemeColors.RED;
    case 2:
      return ThemeColors.RED;
    case 3:
      return ThemeColors.RED;
    case 4:
      return ThemeColors.RED;
    case 5:
      return ThemeColors.RED;
    case 6:
      return ThemeColors.RED;
    case 7:
      return ThemeColors.RED;
    case 8:
      return ThemeColors.RED;
    case 9:
      return ThemeColors.RED;

    default:
  }
};
export {getRandomColor};
