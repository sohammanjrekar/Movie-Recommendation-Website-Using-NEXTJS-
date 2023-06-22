import React from 'react'
import StyleSheet from '@/app/styles/main.module.css'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <h1 className={StyleSheet.mainmy}>contactus</h1>
      <Image src="/rock.jpg" alt="" width={100} height={50}/>
    </div>
  )
}

export default page
