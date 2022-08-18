export interface IaddStock {
  stockName: string
  stockCode: string
  price: string
  quantity: number
  date: string
  memo: string
  categoryID: string | string[] | undefined
}
