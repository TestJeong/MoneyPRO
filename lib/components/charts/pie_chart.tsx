import React from "react"
import {ApexOptions} from "apexcharts"
import dynamic from "next/dynamic"
const ApexChart = dynamic(() => import("react-apexcharts"), {ssr: false})

const PieChart = ({height = 100}) => {
  const chartOption: ApexOptions = {
    chart: {
      width: "10%",
      height: 52,
      type: "pie",
      toolbar: {
        show: false
      }
    },
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    dataLabels: {
      enabled: true
    },
    // stroke: {
    //   width: 3,
    //   curve: "smooth"
    // },
    // colors: ["#ff7369"],
    // legend: {
    //   offsetY: -10
    // },

    // markers: {
    //   size: 6,
    //   discrete: [
    //     {
    //       fillColor: "#ff7369",
    //       strokeColor: "#FFF",
    //       size: 6
    //     }
    //   ]
    // },
    labels: ["Team 1A", "Team2 B", "Team3 C", "Team4 D", "Team5 E", "123"],
    xaxis: {
      categories: "categories"
    },

    tooltip: {
      //   custom: function ({series, seriesIndex, dataPointIndex, w}) {
      //     let data = w.globals.categoryLabels[dataPointIndex].split("/")
      //     return (
      //       '<div class="arrow_box">' +
      //       '<span class="score_text">' +
      //       "점수 : " +
      //       series[seriesIndex][dataPointIndex] +
      //       "점" +
      //       "</span>" +
      //       '<span class="date_text">' +
      //       data[0] +
      //       "월" +
      //       data[1] +
      //       "일" +
      //       "</span>" +
      //       "</div>"
      //     )
      //   }
    }

    // grid: {
    //   row: {
    //     colors: ["transparent"],
    //     opacity: 0.2
    //   },
    //   borderColor: "#fff"
    // }
  }
  const apexAreaChartData = [44, 55, 13, 43, 22, 1000]

  return <ApexChart options={chartOption} series={apexAreaChartData} type="pie" className="apex-charts" height={208} />
}

export default PieChart
