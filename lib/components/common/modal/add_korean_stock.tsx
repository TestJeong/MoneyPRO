import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import {NextPage} from "next"
import {useRouter} from "next/router"
import {ChangeEvent, useState} from "react"
import {REQUEST_KOREAN_STOCK_API} from "utils/api/get_api"
import {POST_ADD_STOCK} from "utils/api/post_api"
import {STOCK_LIST} from "utils/qeury_key"
import InputBox from "../box/input_box"

const AddKoreanStock: NextPage = ({setonmodalclose = () => {}}: any) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [stockName, setStockName] = useState("")
  const [stockCode, setStockCode] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [date, setDate] = useState("")
  const [memo, setMemo] = useState("")

  const [placeholder, setPlaceholder] = useState("종목을 입력해주세요")

  const {data, isSuccess} = useQuery(["koreanStockList", stockName], () => REQUEST_KOREAN_STOCK_API(stockName))
  const {mutate} = useMutation(POST_ADD_STOCK)

  const onClickStockItem = (item: {stock_id: string; stock_name: string}) => {
    setPlaceholder(item.stock_name)
    setStockCode(item.stock_id)
    setStockName("")
  }

  const commaString = (num: string) => {
    const NUMCHANGE = Number(num.replaceAll(",", ""))
    if (isNaN(NUMCHANGE)) setPrice("")
    else setPrice(NUMCHANGE.toLocaleString("ko-KR"))
  }

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    let {value} = e.target
    commaString(value)
  }

  const onClickComplite = () => {
    const categoryID = router.query.categoryID
    mutate(
      {stockName: placeholder, stockCode, price, quantity, date, memo, categoryID},
      {
        onSuccess: () => {
          setonmodalclose()
          queryClient.invalidateQueries([STOCK_LIST])
        }
      }
    )
  }

  return (
    <div className=" min-h-[20rem] w-full relative">
      <InputBox title="종목검색">
        <input type="text" placeholder={placeholder} value={stockName} onChange={(e) => setStockName(e.target.value)} />
      </InputBox>

      <div className={`overflow-scroll max-h-[18rem] absolute bg-white w-full z-20 pl-4 rounded-xl ${stockName ? "border-2" : "border-0"}`}>
        {isSuccess &&
          data.map((item: any, index: number) => (
            <div key={index} className="text-left py-2 hover:opacity-50" onClick={() => onClickStockItem(item)}>
              <span>{item.school_address}</span> <span>{item.stock_name}</span>
            </div>
          ))}
      </div>

      <InputBox title="구매 금액">
        <input pattern="\d*" type="text" value={price} onChange={onChangePrice} />
      </InputBox>

      <InputBox title="수량">
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </InputBox>

      <InputBox title="날짜">
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </InputBox>

      <InputBox title="메모">
        <input type="text" value={memo} onChange={(e) => setMemo(e.target.value)} />
      </InputBox>

      <footer>
        <div className=" flex justify-around my-4">
          <button onClick={onClickComplite}>확인</button>
          <button onClick={() => setonmodalclose()}>취소</button>
        </div>
      </footer>
    </div>
  )
}

export default AddKoreanStock
