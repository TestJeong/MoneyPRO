import type {NextPage} from "next"
import {useState} from "react"
import ModalPortal from "lib/components/common/modal/modal_portal"
import Header from "@components/layout/header"
import AddCategory from "@components/common/modal/add_category"

const Home: NextPage = () => {
  const [onModal, setOnModal] = useState(false)
  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-7 phone:flex phone:flex-col gap-4 ">
        <div className=" bg-slate-200 col-span-5 phone:col-span-1 rounded-md">그래프</div>
        <div className=" bg-slate-200 col-start-6 col-end-8 ">총합 자산(어제 대비 얼마 올랐는지?)</div>
        <div className="bg-slate-200 col-span-4 phone:col-span-1  rounded-md">
          <div className="p-4">
            <button className=" w-full justify-end flex" onClick={() => setOnModal(true)}>
              추가
            </button>
          </div>
        </div>
        <div className="bg-slate-200 rounded-md">차트(보유테마)</div>
        <div className="bg-slate-200 rounded-md">환율,금리정보</div>
        <div className="bg-slate-200  rounded-md ">증시정보</div>
        <div className="bg-slate-200 rounded-md col-span-7">뉴스룸</div>
      </div>

      <div></div>
      <ModalPortal onModal={onModal} setOnModal={setOnModal}>
        <AddCategory />
      </ModalPortal>
    </div>
  )
}

export default Home
