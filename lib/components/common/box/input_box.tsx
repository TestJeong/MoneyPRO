import {ReactChild} from "react"

interface IInputBoxType {
  title: string
  children: ReactChild
}

const InputBox = ({title, children}: IInputBoxType) => {
  return (
    <div className="w-full flex flex-col">
      <span className="font-bold my-2">{title}</span>
      <div className="relative flex w-full h-[2.5rem] rounded-xl pl-4 pr-3 border-[1px] mb-2">{children}</div>
    </div>
  )
}

export default InputBox
