import {useQuery} from "@tanstack/react-query"
import {NextPage} from "next"
import {ChangeEvent, FormEvent, ReactChild, ReactNode, useEffect, useState} from "react"
import {REQUEST_KOREAN_STOCK_API} from "utils/api/get_api"

const AddKoreanStock: NextPage = ({setonmodalclose = () => {}}: any) => {
  const [stockName, setStockName] = useState("")
  const [price, setPrice] = useState("")
  const [placeholder, setPlaceholder] = useState("종목을 입력해주세요")
  const {data, isSuccess} = useQuery(["koreanStockList", stockName], () => REQUEST_KOREAN_STOCK_API(stockName))

  const onClickStockItem = (stock: string) => {
    setPlaceholder(stock)
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

  const onClickComplite = () => {}

  return (
    <div className=" min-h-[20rem] w-full relative">
      <InputBox title="종목검색">
        <input type="text" placeholder={placeholder} value={stockName} onChange={(e) => setStockName(e.target.value)} />
      </InputBox>

      <div className={`overflow-scroll max-h-[18rem] absolute bg-white w-full z-20 pl-4 rounded-xl ${stockName ? "border-2" : "border-0"}`}>
        {isSuccess &&
          data.map((item: any, index: number) => (
            <div key={index} className="text-left py-2 hover:opacity-50" onClick={() => onClickStockItem(item.stock_name)}>
              <span>{item.school_address}</span> <span>{item.stock_name}</span>
            </div>
          ))}
      </div>

      <InputBox title="구매 금액">
        <input pattern="\d*" type="text" value={price} onChange={onChangePrice} />
      </InputBox>

      <InputBox title="수량">
        <input type="number" />
      </InputBox>

      <InputBox title="날짜">
        <input type="text" />
      </InputBox>

      <InputBox title="메모">
        <input type="text" />
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

interface IInputBoxType {
  title: string
  children: ReactChild
}

const InputBox = ({title, children}: IInputBoxType) => {
  return (
    <div className="w-full flex flex-col">
      <span className="font-bold my-2">{title}</span>
      <div className="relative flex w-full h-[2.5rem] rounded-xl pl-4 pr-3 border-[1px] mb-2">{children}</div>
    </div>
  )
}

export default AddKoreanStock
