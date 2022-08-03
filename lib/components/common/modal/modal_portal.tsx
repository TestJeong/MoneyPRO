import React, {useEffect, useRef, useState} from "react"
import {createPortal} from "react-dom"
import {AnimatePresence, motion} from "framer-motion"
import _ from "lodash"

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    y: "-100vh",
    opacity: 0
  }
}

const backdrop = {
  hidden: {
    y: "0vh",
    opacity: 0
  },
  visible: {
    y: "0vh",
    opacity: 1
  }
}

/**
 * @param children 모달창 내용 컴포넌트
 * @param closePortal 모달창 닫는 함수
 * @param type 모달 타입 (아무것도 입력하지 않을경우 일반 center에 보여지는 모달. bottom 입력시 bottom 모달)
 */

const ModalPortal = ({onModal, setOnModal, children, type = "center", calendar = false}: any) => {
  const setonmodalclose = _.throttle(() => {
    setOnModal(false)
  }, 250)

  if (typeof window === "undefined") return null
  return createPortal(
    <AnimatePresence exitBeforeEnter>
      {onModal && (
        <div className={`flex fixed top-0 left-0 z-20 w-full h-full justify-center ${type === "center" ? "items-center" : "items-end "}`}>
          <motion.div
            key="backdrop"
            initial={backdrop.visible}
            animate={backdrop.visible}
            exit={backdrop.hidden}
            className="absolute w-full h-full bg-[#000000a1] z-10"
            onClick={setonmodalclose}
          />
          <motion.div
            key="modal"
            initial={dropIn.hidden}
            animate={dropIn.visible}
            exit={dropIn.hidden}
            style={{width: "100%"}}
            className={`${
              type === "center" ? "rounded-3xl border-0 m-5 max-w-sm" : "w-full rounded-tl-3xl rounded-tr-3xl justify-between"
            } flex flex-col z-10 bg-white border-2`}
          >
            <div className={` ${calendar ? "flex" : "flex p-[1rem]"}`}>{React.cloneElement(children, {setonmodalclose})}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")!
  )
}

export default ModalPortal
