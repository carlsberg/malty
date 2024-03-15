import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import colorsData from './globalColors.json';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import tokensData from './semanticMalty.json';
import { cadiTheme, carlsbergTheme, globalTheme, lbcTheme } from './theme';
import { TypographyProvider } from './TypographyProvider';

export const MaltyThemeProvider = ({ theme = 'global', children }: MaltyThemeProviderProps) => {
  let selectedTheme: DefaultTheme;
  switch (theme) {
    case 'cadi':
      selectedTheme = cadiTheme;
      break;
    case 'carlsberg':
      selectedTheme = carlsbergTheme;
      break;
    case 'lbc':
      selectedTheme = lbcTheme;
      break;
    default:
      selectedTheme = globalTheme;
      break;
  }

  // theme.colors.primary.100.value?
  // theme.colors.primary.100

  // console.log(theme.colors.primary.100);

  // console.log('GLOBAL COLORS primary', globalColors.neutral[500].value);
  // console.log('MALTY TOKENS', maltyTokens.primary[100].value);

  // console.log('RESULT', maltyTokens.primary[100].value);

  // const [color, value] = maltyTokens.primary[100].value.replace(/[{}]/g, '').split('.');

  // console.log('color', color, value);

  // console.log('FINAL RESULT', globalColors[color][value].value);

  // function transformColors(tokens: any) {
  //   const newTokens = JSON.parse(JSON.stringify(tokens));
  //   const [color, value] = newTokens.primary[100].value.replace(/[{}]/g, '').split('.');
  //   const colorValue = globalColors[color][value].value;

  //   newTokens.primary[100] = colorValue;

  //   return newTokens;
  // }

  // function getColorValue(tokens: any) {
  //   const tokensParsed = JSON.parse(JSON.stringify(tokens));

  //   function recursive(toIterate: any) {
  //     const tokensKeys = Object.keys(toIterate);

  //     tokensKeys.forEach((item2: any) => {
  //       const item = toIterate[item2];

  //       if (item.value) {
  //         const [color, value] = item.value.replace(/[{}]/g, '').split('.');
  //         const colorValue = globalColors[color][value].value;

  //         toIterate[item] = colorValue;
  //       }

  //       recursive(item);
  //     });
  //   }

  //   recursive(tokensParsed);

  //   console.log(tokensParsed);
  // }

  // console.log('GET COLORS', getColorValue(JSON.parse(JSON.stringify(maltyTokens))));
  // console.log('INITIAL TOKENS', maltyTokens);
  // console.log('TRANSFORMED TOKENS', transformColors(maltyTokens));

  // function resolveTokens(tokens, colors) {
  //   // Función recursiva para resolver los tokens
  //   function resolve(token) {
  //     // Verifica si el valor del token es una referencia a otro color
  //     if (typeof token === 'string' && token.startsWith('{') && token.endsWith('}')) {
  //       const [colorGroup, colorKey] = token.substring(1, token.length - 1).split('.');
  //       // Si se encuentra el color, devuelve el valor del token
  //       if (colors[colorGroup] && colors[colorGroup][colorKey]) {
  //         return colors[colorGroup][colorKey].value;
  //       }
  //     } else if (typeof token === 'object') {
  //       // Si el token es un objeto, crea una copia del objeto y realiza una llamada recursiva en cada valor
  //       const resolvedToken: any = {};
  //       Object.keys(token).forEach((key) => {
  //         resolvedToken[key] = resolve(token[key]);
  //       });
  //       return resolvedToken;
  //     }
  //     // Devuelve el token sin cambios si no se encuentra una referencia a otro color
  //     return token;
  //   }

  //   // Itera sobre cada token
  //   const resolvedTokens: any = {};
  //   Object.keys(tokens).forEach((tokenGroup) => {
  //     resolvedTokens[tokenGroup] = {};
  //     Object.keys(tokens[tokenGroup]).forEach((tokenKey) => {
  //       resolvedTokens[tokenGroup][tokenKey] = resolve(tokens[tokenGroup][tokenKey]);
  //     });
  //   });

  //   return resolvedTokens;
  // }

  function resolveTokens(tokens, colors) {
    function resolve(token) {
      if (typeof token === 'string' && token.startsWith('{') && token.endsWith('}')) {
        const [colorGroup, colorKey] = token.substring(1, token.length - 1).split('.');
        if (colors[colorGroup] && colors[colorGroup][colorKey]) {
          return colors[colorGroup][colorKey].value;
        }
      } else {
        const resolvedToken: any = {};

        Object.keys(token).forEach((key) => {
          resolvedToken[key] = resolve(token[key]);
        });

        return resolvedToken;
      }

      return token;
    }

    const resolvedTokens: any = {};
    Object.keys(tokens).forEach((tokenGroup) => {
      resolvedTokens[tokenGroup] = {};
      Object.keys(tokens[tokenGroup]).forEach((tokenKey) => {
        const resolvedValue = resolve(tokens[tokenGroup][tokenKey]);
        resolvedTokens[tokenGroup][tokenKey] = resolvedValue.value;
      });
    });

    return resolvedTokens;
  }

  console.log('FINAL TOKENS', resolveTokens(tokensData, colorsData));

  return (
    <ThemeProvider theme={selectedTheme}>
      <TypographyProvider />
      {children}
    </ThemeProvider>
  );
};
