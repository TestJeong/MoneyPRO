export const yieldCalculator = (current: number, price: number) => {
  const result = (current / price) * 100 - 100
  return result.toFixed(2)
}
