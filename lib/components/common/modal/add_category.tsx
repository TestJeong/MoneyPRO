import {useMutation, useQueryClient} from "@tanstack/react-query"
import {useState} from "react"
import {POST_ADD_CATEGORY} from "utils/api/post_api"
import {CATEGORY_LIST} from "utils/qeury_key"
import InputBox from "../box/input_box"

const AddCategory = ({setonmodalclose = () => {}}) => {
  const [title, setTitle] = useState("")
  const [account, setAccount] = useState("")
  const queryClient = useQueryClient()

  const {mutate} = useMutation(POST_ADD_CATEGORY)

  const onClickComplite = () => {
    mutate(
      {title, account},
      {
        onSuccess: () => {
          setonmodalclose()
          queryClient.invalidateQueries([CATEGORY_LIST])
        }
      }
    )
  }

  return (
    <div className=" min-h-[20rem] w-full relative">
      <div>
        <InputBox title="카테고리명">
          <input type="text" className="w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputBox>
        <InputBox title="자산계좌">
          <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </InputBox>
      </div>
      <footer>
        <div className=" flex justify-around my-4">
          <button onClick={onClickComplite}>확인</button>
          <button onClick={() => setonmodalclose()}>취소</button>
        </div>
      </footer>
    </div>
  )
}

export default AddCategory
