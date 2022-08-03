import type {NextPage} from "next"
import styles from "../styles/Home.module.css"
import {useState} from "react"
import ModalPortal from "lib/components/common/modal/modal_portal"
import AddKoreanStock from "lib/components/common/modal/add_korean_stock"

const Home: NextPage = () => {
  const [onModal, setOnModal] = useState(false)
  return (
    <div>
      <div>
        <span>메인페이지</span>
      </div>
    </div>
  )
}

export default Home
