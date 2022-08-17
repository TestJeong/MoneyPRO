import type {NextPage} from "next"
import {useEffect, useState} from "react"
import ModalPortal from "lib/components/common/modal/modal_portal"
import Header from "@components/layout/header"
import AddCategory from "@components/common/modal/add_category"
import {useQuery} from "@tanstack/react-query"
import {REQUEST_CATEGORY_LIST} from "utils/api/get_api"
import {IcategoryType} from "lib/type/category_type"
import {CATEGORY_LIST} from "utils/qeury_key"
import {useRouter} from "next/router"

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
          <div className="p-4 max-h-[45rem] overflow-scroll">
            {!categoryList.isLoading && categoryList.data.map((data: IcategoryType) => <CategoryItem data={data} />)}
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

const CategoryItem = ({data}: {data: IcategoryType}) => {
  const router = useRouter()

  const onPressCategoryItem = () => {
    router.push({pathname: "account", query: {categoryID: data.id}})
  }

  return (
    <div className="border-2 border-sky-500 rounded-lg bg-slate-300 p-3 mb-2 ">
      <button className="w-full text-left" onClick={onPressCategoryItem}>
        <div className="flex justify-between">
          <span>{data.title}</span>
          <span>{data.account}</span>
        </div>
      </button>
    </div>
  )
}

export default Home
