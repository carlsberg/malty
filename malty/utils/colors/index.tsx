const rgbToHex = (value: string) =>
  value.replace(
    /rgb\((.+?)\)/gi,
    (_, rgb) =>
      `#${rgb
        .split(',')
        .map((str: string) => parseInt(str, 10).toString(16).padStart(2, '0'))
        .join('')}`
  );

export { rgbToHex };
