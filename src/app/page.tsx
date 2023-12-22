import React from 'react'

import CustomCalendar from './components/Calendar'
import OutlineCalendar from './components/Calendar/OutlineCalendar'
import PasswordInput from './components/Password'

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center">
      <div>
        <h1 className="leading-[60px] h-[60px] md:h-[120px] md:leading-[120px] text-2xl md:text-5xl">
          Aha Front-end Exam-1
        </h1>
        <h2 className="leading-[20px] h-[20px] md:h-[40px] md:leading-[40px] text-lg md:text-xl text-[#676767]">
          Hu-Cheng, Lee (Jack)
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full h-screen ">
        <CustomCalendar />
        <PasswordInput />
        <OutlineCalendar />
      </div>
    </div>
  )
}
