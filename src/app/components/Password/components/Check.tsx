import React from 'react'

import IconCheck from '@/app/icons/IconCheck'
import IconCheckOutline from '@/app/icons/IconCheckOutline'

type CheckProps = {
  isCheck?: boolean
  description?: string
  height?: string
}

export default function Check({ isCheck, description, height }: CheckProps) {
  return (
    <div className={`flex justify-start items-center gap-[10px] ${height}`}>
      {isCheck ? <IconCheck /> : <IconCheckOutline />}
      <div className="flex justify-start items-center h-10 py-2 pr-4 box-border text-[14px] leading-[21px] tracking-[0.25px] text-white">
        {description}
      </div>
    </div>
  )
}

Check.defaultProps = {
  isCheck: false,
  description: '',
  height: 'h-[40px]',
}
