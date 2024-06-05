/* eslint-disable @typescript-eslint/no-var-requires */
const primitives = require('./primitives.json');
const semantics = require('./semantics.json');

// PRIMITIVE COLORS
export function getPrimitiveColors() {
  const { colors } = primitives;

  const primitiveColors: { [key: string]: { [shade: string]: string } } = {};

  Object.keys(colors).forEach((key) => {
    const color = colors[key as keyof typeof colors] as { [shade: string]: { value: string } };

    Object.keys(color).forEach((shade) => {
      if (!primitiveColors[key]) {
        primitiveColors[key] = {};
      }

      primitiveColors[key][shade] = color[shade].value;
    });
  });

  return primitiveColors;
}

// SEMANTIC COLORS
export function getSemanticColors(primitiveColors: { [key: string]: { [shade: string]: string } }) {
  const getSemanticToken = (value: string): string => {
    const tempValue = value.substring(1, value.length - 1);
    const [_, token1, token2] = tempValue.split('.');

    return primitiveColors[token1][token2];
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalSemanticColors: any = { ...semantics.colors };

  for (const mode of Object.keys(finalSemanticColors)) {
    const modeObject = { ...finalSemanticColors[mode] };
    finalSemanticColors[mode] = modeObject;

    for (const type of Object.keys(modeObject)) {
      const typeObject = { ...modeObject[type] };
      modeObject[type] = typeObject;

      if (['background', 'foreground'].includes(type)) {
        for (const subType of Object.keys(typeObject)) {
          const subTypeObject = { ...typeObject[subType] };
          typeObject[subType] = subTypeObject;

          for (const state of Object.keys(subTypeObject)) {
            subTypeObject[state] = getSemanticToken(subTypeObject[state].value);
          }
        }
      } else {
        for (const shade of Object.keys(typeObject)) {
          typeObject[shade] = getSemanticToken(typeObject[shade].value);
        }
      }
    }
  }

  return finalSemanticColors;
}

// SIZES, BORDER RADIUS, OPACITY
export function getDefaultPrimitiveTokens(item: string) {
  const rawTokens = primitives[item as keyof typeof primitives];

  const transformedTokens: { [key: string]: string } = {};

  Object.keys(rawTokens).forEach((key) => {
    transformedTokens[key] = (rawTokens[key as keyof typeof rawTokens] as { value: string }).value;
  });

  return transformedTokens;
}

export function getDefaultSemanticTokens(item: string, primitiveObj: { [key: string]: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawTokens: any = semantics[item as keyof typeof semantics];

  const transformedTokens: { [key: string]: string } = {};

  Object.keys(rawTokens).forEach((key) => {
    const token = rawTokens[key].value;
    const tempValue = token.substring(1, token.length - 1);
    const [_, token1] = tempValue.split('.');
    transformedTokens[key] = primitiveObj[token1];
  });

  return transformedTokens;
}

// BORDERS
export function getPrimitiveBorderTokens(primitiveColors: { [key: string]: { [shade: string]: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalPrimitiveBorderTokens: any = { ...primitives.border };

  for (const type of Object.keys(finalPrimitiveBorderTokens)) {
    const tempObject = { ...finalPrimitiveBorderTokens[type].value };
    const tempValue = tempObject.color.substring(1, tempObject.color.length - 1);
    const [_, token1, token2] = tempValue.split('.');

    finalPrimitiveBorderTokens[type] = {
      color: primitiveColors[token1][token2],
      width: tempObject.width,
      style: tempObject.style
    };
  }
  return finalPrimitiveBorderTokens;
}

// SHADOWS
export function getShadowTokens() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawShadows: any = primitives['box shadow'];

  const shadowTokens: { [key: string]: string } = {};

  Object.keys(rawShadows).forEach((key) => {
    const shadow = rawShadows[key].value;

    if (Array.isArray(shadow)) {
      shadowTokens[key] = shadow.map(getShadowValue).join(', ');
    } else {
      shadowTokens[key] = getShadowValue(shadow);
    }
  });

  return shadowTokens;
}

function getShadowValue(shadow: { x: number; y: number; blur: number; spread: number; color: string }) {
  return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
}

// TYPOGRAPHY
export function getTypographyTokens() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalTypography: { [key: string]: any } = {};

  for (const fontFamily of Object.keys(primitives.fontFamilies)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = (primitives.fontFamilies as any)[fontFamily].value.toLowerCase();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    finalTypography[fontFamily] = { ...(primitives as any)[value] };
  }

  const getSemanticToken = (value: string): string => {
    const tempValue = value.substring(1, value.length - 1);
    const [token0, token1] = tempValue.split('.');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (primitives as any)[token0][token1].value;
  };

  for (const font of Object.keys(finalTypography)) {
    const fontObject = { ...finalTypography[font] };
    finalTypography[font] = fontObject;

    for (const section of Object.keys(fontObject)) {
      const sectionObject = { ...fontObject[section] };
      fontObject[section] = sectionObject;

      for (const size of Object.keys(sectionObject)) {
        const sizeObject = { ...sectionObject[size] };
        sectionObject[size] = sizeObject;

        for (const weight of Object.keys(sizeObject)) {
          const tempObject = sizeObject[weight].value;

          sizeObject[weight] = {
            fontFamily: `${getSemanticToken(tempObject.fontFamily)}, 'sans-serif'`,
            fontWeight: sizeObject[weight].description,
            lineHeight: `${getSemanticToken(tempObject.lineHeight)}px`,
            fontSize: `${getSemanticToken(tempObject.fontSize)}px`,
            letterSpacing: `${getSemanticToken(tempObject.letterSpacing)}px`,
            paragraphSpacing: `${getSemanticToken(tempObject.paragraphSpacing)}px`,
            paragraphIndent: `${getSemanticToken(tempObject.paragraphIndent)}`,
            textCase: getSemanticToken(tempObject.textCase),
            textDecoration: getSemanticToken(tempObject.textDecoration)
          };
        }
      }
    }
  }

  return finalTypography;
}

// GRID
export function getGridTokens() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalGridTokens: any = { ...semantics.grid };

  for (const size of Object.keys(finalGridTokens)) {
    const sizeObject = { ...finalGridTokens[size] };
    finalGridTokens[size] = sizeObject;

    for (const type of Object.keys(sizeObject)) {
      const tempObject = sizeObject[type];

      sizeObject[type] = {
        columns: tempObject.columns.value,
        minWidth: `${tempObject.minWidth.value}px`,
        margin: `${tempObject.margin.value}px`,
        gutter: `${tempObject.gutter.value}px`,
        container:
          size === 'xl' && type === 'fixed' ? `${tempObject.container.value}px` : `${tempObject.container.value}%`
      };

      if (size !== 'xl') {
        sizeObject[type].maxWidth = `${tempObject.maxWidth.value}px`;
      }
    }
  }

  return finalGridTokens;
}
