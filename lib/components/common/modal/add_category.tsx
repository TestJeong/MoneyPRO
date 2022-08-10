import {useState} from "react"
import InputBox from "../box/input_box"

const AddCategory = () => {
  const [memo, setMemo] = useState("")
  const [account, setAccount] = useState("")

  return (
    <div className=" min-h-[20rem] w-full relative">
      <div>
        <InputBox title="카테고리명">
          <input type="text" value={memo} onChange={(e) => setMemo(e.target.value)} />
        </InputBox>
        <InputBox title="자산계좌">
          <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </InputBox>
      </div>
    </div>
  )
}

export default AddCategory
