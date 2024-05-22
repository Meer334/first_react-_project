import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const card = ({data}) => {
  return (
    <motion.div drag className='relative flex-shrink w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between py-3 mb-2 px-5'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                {data.close ? <IoCloseSharp /> : <LuDownloadCloud size=".8em" color='#fff' />}
                
                </span>
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold cursor-pointer'>{data.tag.tagTitle}</h3>
                </div>
              )
            }

        </div>
    </motion.div>
  )
}

export default card