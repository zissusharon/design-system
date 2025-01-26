export const spacingSizeArray = [
  0, 1, 2, 3, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40,
];

export const spacing = (value: number | string) => {
  if (value === 'auto') {
    return 'auto';
  }

  if (spacingSizeArray.includes(value as number)) {
    return `${value}px`;
  }

  throw new Error(`Spacing with ${value} value is not from the spacing system`);
};
