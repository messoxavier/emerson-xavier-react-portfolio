import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMoodle } from "react-icons/si";

const Techs = () => {
  return <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Tecnologias</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl "/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMoodle className="text-7xl text-orange-600"/>
        </div>
      </div>
    </div>
  
}

export default Techs
