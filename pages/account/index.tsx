import AddKoreanStock from "@components/common/modal/add_korean_stock"
import ModalPortal from "@components/common/modal/modal_portal"
import Header from "@components/layout/header"
import {useState} from "react"

const AccountList = () => {
  const [onModal, setOnModal] = useState(false)
  return (
    <div className="">
      <Header />
      {/* <div className="grid sm:grid-cols-6 grid-cols-1  sm:grid-flow-col grid-rows-0 gap-5">
        <div className="bg-slate-600  h-24 sm:col-span-6 rounded-lg">현재 자산</div>
        <div className="bg-slate-100 rounded-lg">카테고리</div>
        <div className="bg-slate-200 sm:col-span-4 rounded-lg h-[50rem]">종목 리스트</div>
        <div className="bg-slate-300 rounded-lg sm:col-span-1 h-[20rem]">???</div>
        <div className="bg-slate-300 rounded-lg sm:col-span-2 sm:row-span-2">???1111</div>
        <div className="bg-slate-500 rounded-lg h-36">???</div>
      </div> */}
      <div className="grid grid-cols-6 gird-rows-6  gap-4 ">
        <div style={{gridColumn: "1/7"}} className=" bg-slate-600 ">
          01
        </div>
        <div className=" bg-slate-100 row-span-1">02</div>
        <div style={{gridColumn: "2/ span 7"}} className="bg-slate-200  ">
          03
        </div>
        <div className="bg-slate-300 col-span-1">04</div>
        <div className="bg-slate-500 col-span-3 row-span-6">05</div>
        <div className="bg-slate-500  row-span-1">06</div>
      </div>

      <div>
        <button onClick={() => setOnModal(true)}>모달 버튼</button>
      </div>
      <ModalPortal onModal={onModal} setOnModal={setOnModal}>
        <AddKoreanStock />
      </ModalPortal>
    </div>
  )
}

export default AccountList
