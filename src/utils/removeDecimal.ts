export function removeDecimal(num: number): number {
  let decimal = num - Math.floor(num);
  if (decimal < 0.01) {
    return Number(Math.floor(num));
  } else {
    return Number(num.toFixed(2));
  }
}