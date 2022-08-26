import AddKoreanStock from "@components/common/modal/add_korean_stock"
import ModalPortal from "@components/common/modal/modal_portal"
import Header from "@components/layout/header"
import {useQuery} from "@tanstack/react-query"
import {useEffect, useState} from "react"
import {REQUEST_API_TOKEN, REQUEST_ASSETS_INFOMATION, REQUEST_STOCK_LIST} from "utils/api/get_api"
import {ASSETS_INFOMATION, STOCK_LIST} from "utils/qeury_key"
import {Istock} from "lib/type/stock_type"
import {GetServerSideProps} from "next"
import {yieldCalculator, currentAssets, currentRevenu} from "utils/helper/stock_helper"
import PieChart from "@components/charts/pie_chart"

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {id: context.query.categoryID}}
}

const AccountList = (id: string) => {
  const [onModal, setOnModal] = useState(false)

  const stockList = useQuery([STOCK_LIST], () => REQUEST_STOCK_LIST(id))
  const assetsInfomation = useQuery([ASSETS_INFOMATION], REQUEST_API_TOKEN)

  useEffect(() => {
    if (!assetsInfomation.isLoading) {
      //console.log("!@!@", assetsInfomation.data)
    }
  }, [assetsInfomation.isLoading])

  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-7 phone:flex phone:flex-col gap-4 m-4">
        {/*  */}
        <div className=" bg-slate-200 col-span-7 phone:col-span-1 rounded-md h-[12rem] p-4">
          <div className="flex ">
            <span className="font-bold text-4xl">총자산 :</span>
            <span className="font-semibold text-4xl"> 20,000,000</span>
          </div>
          <div className="font-bold text-2xl">평가 손익</div>
          <div className="font-bold text-xl">수익률</div>
        </div>

        {/*  */}
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

        {/*  */}
        <div className="bg-slate-200 col-span-4 phone:col-span-1 row-span-2 rounded-md h-[65rem] overflow-scroll">
          <div className="p-4 w-full">
            <div className=" flex w-full justify-between  border-b-2 border-blue-500 mb-3 px-3 pb-1">
              <span className="flex flex-1">종목명</span>
              <span className="flex flex-1 ">수량</span>
              <span className="flex ">가격</span>
            </div>
            {!stockList.isLoading && stockList.data.map((data: Istock, index: number) => <AccountListItem key={index} data={data} />)}
            <button className=" w-full justify-end flex" onClick={() => setOnModal(true)}>
              추가
            </button>
          </div>
        </div>

        {/*  */}
        <div className="bg-slate-200 rounded-md   col-span-2 row-span-2 flex flex-col p-4 ">
          <div className="bg-slate-200 rounded-md p-4 shadow-2xl flex-1">
            <span>종목 테마</span>
            <PieChart />
          </div>
          <div className="bg-slate-200 rounded-md p-4 my-4 shadow-2xl flex-1  ">
            <span>종목 주식</span>
            <PieChart />
          </div>
          <div className="bg-slate-200 rounded-md p-4 shadow-2xl flex-1">
            <span>테스트1</span>
            <PieChart />
          </div>
        </div>

        {/*  */}
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
  const aa = currentAssets(parseFloat(data.currentPrice.replace(/,/g, "")), parseFloat(data.price.replace(/,/g, "")), data.quantity)
  const bb = currentRevenu(parseFloat(data.currentPrice.replace(/,/g, "")), parseFloat(data.price.replace(/,/g, "")), data.quantity)

  return (
    <div className="border-2 border-sky-500 rounded-lg bg-slate-300 p-3 mb-2 ">
      <button className="flex w-full flex-col ">
        <div className=" flex w-full justify-between">
          <div>
            <span className="font-bold text-lg">{data.stockName} </span>
            <span className="text-xs">{data.stockTheme}</span>
          </div>
          <div>
            <span className="text-xs">수량 </span>
            <span className="text-xs">{data.quantity}</span>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="text-left">
            <div>
              <span>현재자산 : </span>
              <span className="">{aa}원</span>
            </div>
            <div>
              <span>
                현재수익 : {bb}원 ({yieldCalculator(parseFloat(data.currentPrice.replace(/,/g, "")), parseFloat(data.price.replace(/,/g, "")))}%)
              </span>
            </div>
          </div>

          <div className="text-right">
            <div>
              <span>구매가격 : </span>
              <span className="">{data.price} 원</span>
            </div>
            <div>
              <span>현재가격 : </span>
              <span className="">{data.currentPrice} 원</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default AccountList
