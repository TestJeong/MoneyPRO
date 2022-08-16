import type {NextPage} from "next"
import {useEffect, useState} from "react"
import ModalPortal from "lib/components/common/modal/modal_portal"
import Header from "@components/layout/header"
import AddCategory from "@components/common/modal/add_category"
import {useQuery} from "@tanstack/react-query"
import {REQUEST_CATEGORY_LIST} from "utils/api/get_api"
import {IcategoryType} from "lib/type/category.type"
import {CATEGORY_LIST} from "utils/qeury_key"

const Home: NextPage = () => {
  const [onModal, setOnModal] = useState(false)
  const categoryList = useQuery([CATEGORY_LIST], REQUEST_CATEGORY_LIST)

  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-7 phone:flex phone:flex-col gap-4 ">
        <div className=" bg-slate-200 col-span-5 phone:col-span-1 rounded-md">그래프</div>
        <div className=" bg-slate-200 col-start-6 col-end-8 ">총합 자산(어제 대비 얼마 올랐는지?)</div>
        <div className="bg-slate-200 col-span-4 phone:col-span-1  rounded-md">
          <div className="p-4">
            {!categoryList.isLoading &&
              categoryList.data.map((data: IcategoryType) => {
                return <div>{data.title}</div>
              })}
            <button className=" w-full justify-end flex" onClick={() => setOnModal(true)}>
              카테고리 추가
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
