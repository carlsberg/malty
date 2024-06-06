import { DefaultTheme } from 'styled-components';
import {
  borders,
  grid,
  opacity,
  primitiveBorderRadius,
  primitiveColors,
  semanticBorderRadius,
  semanticColors,
  shadows,
  sizes,
  typography
} from './tokens';

const defaultTheme: DefaultTheme = {
  colorsV2: {
    ...primitiveColors,
    ...semanticColors
  },
  sizesV2: { ...sizes },
  borderRadiusV2: {
    ...primitiveBorderRadius,
    ...semanticBorderRadius
  },
  bordersV2: { ...borders },
  opacityV2: { ...opacity },
  shadowsV2: { ...shadows },
  gridV2: { ...grid },
  typographyV2: { ...typography }
};

export default defaultTheme;
