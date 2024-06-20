const rgbToHex = (value: string): string =>
  value.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/gi, (_, r, g, b) => {
    const toHex = (n: string) => parseInt(n, 10).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });

export { rgbToHex };
