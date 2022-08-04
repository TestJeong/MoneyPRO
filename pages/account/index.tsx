import AddKoreanStock from "@components/common/modal/add_korean_stock"
import ModalPortal from "@components/common/modal/modal_portal"
import Header from "@components/layout/header"
import {useState} from "react"

const AccountList = () => {
  const [onModal, setOnModal] = useState(false)
  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-7 phone:flex phone:flex-col gap-4 ">
        <div className=" bg-slate-200 col-span-7 phone:col-span-1 rounded-md">01</div>
        <div className=" bg-slate-200 row-span-2 rounded-md ">
          02
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
          <div>asdfsdfads</div>
        </div>
        <div className="bg-slate-200 col-span-4 phone:col-span-1 row-span-2 rounded-md">
          <div className="p-4">
            <button className=" w-full justify-end flex" onClick={() => setOnModal(true)}>
              추가
            </button>
            
          </div>
        </div>
        <div className="bg-slate-200 rounded-md col-span-2 row-span-2 ">04</div>
        <div className="bg-slate-200 rounded-md">05</div>
        <div className="bg-slate-200  rounded-md col-span-4">06</div>
        <div className="bg-slate-200 rounded-md col-start-6 col-span-2 ">07</div>
      </div>

      <div></div>
      <ModalPortal onModal={onModal} setOnModal={setOnModal}>
        <AddKoreanStock />
      </ModalPortal>
    </div>
  )
}

export default AccountList
