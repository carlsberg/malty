import type { ColorsType, PropValue } from 'styled-components';

const SEPARATE_SQUARE_BRACKETS_REGEX = /\[([^[\]]*)\]/g;

/**
 * Traverse the colors theme definition and search for the
 * given path regardless of the nested level.
 */
export const findColor = (source: ColorsType, colorPath: string): string | undefined => {
  const colorDefinition = colorPath
    .replace(SEPARATE_SQUARE_BRACKETS_REGEX, '.$1.')
    .split('.')
    .filter(Boolean)
    .reduce((previousSource, key) => {
      const safeKey = key as keyof ColorsType;

      return previousSource?.[safeKey] as unknown as ColorsType;
    }, source) as unknown as PropValue | undefined;

  return colorDefinition?.value;
};
