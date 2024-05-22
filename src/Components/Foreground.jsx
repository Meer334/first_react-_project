import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {

    
    const data = [
        {
            desc: "This is my First Import Data Import from Components File You Currently See.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "This is my First Import Data Import from Components File You Currently See.",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Updata Now", tagColor: "blue"},
        },
        {
            desc: "This is my First Import Data Import from Components File You Currently See.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        },
    ];
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-screen flex flex-wrap gap-10 p-5'>
        {data.map((item, index)=>(
            <Card data={item} />
        ))}
    </div>
  )
}

export default Foreground
