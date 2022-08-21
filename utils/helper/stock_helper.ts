// 수익률
export const yieldCalculator = (current: number, price: number) => {
  const result = ((current - price) / price) * 100
  return +result.toFixed(2)
}

// 현재자산
export const currentAssets = (current: number, price: number, quantity: number) => {
  const revenue = (current - price) * quantity
  const result = price * quantity + revenue
  return result.toLocaleString("ko-KR")
}

// 현재수익
export const currentRevenu = (current: number, price: number, quantity: number) => {
  const result = (current - price) * quantity
  return result.toLocaleString("ko-KR")
}
