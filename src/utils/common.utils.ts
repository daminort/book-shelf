import { Color } from 'interfaces/colors.interface';
import { colors } from 'constants/colors';

function randomColor(): Color {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

export {
  randomColor,
}
