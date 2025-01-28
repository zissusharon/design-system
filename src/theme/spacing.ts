export const spacing = (value: number | string) => {
  if (value === 'auto') {
    return 'auto';
  }

  if ((value as number) % 4 !== 0) {
    console.warn('Spacing value must be a multiple of 4');
  }

  return `${value}px`;
};
