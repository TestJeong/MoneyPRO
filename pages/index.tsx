import type {NextPage} from "next"
import styles from "../styles/Home.module.css"
import {useState} from "react"
import ModalPortal from "components/common/modal/modal_portal"
import AddKoreanStock from "components/common/modal/add_korean_stock"

const Home: NextPage = () => {
  const [onModal, setOnModal] = useState(false)
  return (
    <>
      <div className={styles.container}>
        <button onClick={() => setOnModal(true)}>adsfasdf</button>
      </div>
      <ModalPortal onModal={onModal} setOnModal={setOnModal}>
        <AddKoreanStock />
      </ModalPortal>
    </>
  )
}

export default Home
