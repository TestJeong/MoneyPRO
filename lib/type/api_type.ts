export interface IaddStock {
  stockName: string
  stockCode: number
  price: string
  quantity: number
  date: string
  memo: string
  categoryID: string | string[] | undefined
}
