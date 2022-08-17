import AddKoreanStock from "@components/common/modal/add_korean_stock"
import ModalPortal from "@components/common/modal/modal_portal"
import Header from "@components/layout/header"
import {useQuery} from "@tanstack/react-query"
import {useEffect, useState} from "react"
import {REQUEST_STOCK_LIST} from "utils/api/get_api"
import {STOCK_LIST} from "utils/qeury_key"
import {Istock} from "lib/type/stock_type"
import {GetServerSideProps} from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {id: context.query.categoryID}}
}

const AccountList = (id: string) => {
  const [onModal, setOnModal] = useState(false)

  const stockList = useQuery([STOCK_LIST], () => REQUEST_STOCK_LIST(id))
  //const test = useQuery(["asdasd"], REQUEST_KOREA_STOCK_ITEM)

  // useEffect(() => {
  //   if (!test.isLoading) {
  //     console.log("!@!@", test.data)
  //   }
  // }, [test.isLoading])

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
          <div className="p-4 w-full">
            <div className=" flex w-full justify-between  border-b-2 border-blue-500 mb-3 px-3 pb-1">
              <span className="flex flex-1">종목명</span>
              <span className="flex flex-1 ">수량</span>
              <span className="flex ">가격</span>
            </div>
            {!stockList.isLoading && stockList.data.map((data: Istock) => <AccountListItem data={data} />)}
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

const AccountListItem = ({data}: {data: Istock}) => {
  return (
    <div className="border-2 border-sky-500 rounded-lg bg-slate-300 p-3 mb-2 ">
      <button className="flex w-full justify-between">
        <span className="flex flex-1 ">{data.stock}</span>
        <span className="flex flex-1 justify-center">{data.quantity}</span>
        <span className="flex flex-1 justify-end ">{data.price}</span>
      </button>
    </div>
  )
}

export default AccountList
