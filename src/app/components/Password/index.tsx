'use client'

import React from 'react'

import OutlineTextField from '@/app/Styled/TextField'
import Fade from '@mui/material/Fade'
import Popper from '@mui/material/Popper'

import Check from './components/Check'
import { CheckListType, Validation } from './utils'

export default function PasswordInput() {
  const [value, setValue] = React.useState({ original: '', masked: '' })
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const [checkList, setCheckList] = React.useState<CheckListType>({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecial: false,
    isLongerT8: false,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      original: e.target.value,
      masked: e.target.value.replace(/./g, '*'),
    })
    setAnchorEl(e.target.value.length ? e.currentTarget : null)

    setCheckList(Validation(e.target.value))
  }

  const open = Boolean(anchorEl)

  return (
    <div className="flex justify-center items-center max-w-[90vw]">
      <OutlineTextField
        id="pwd-input"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="Password"
        value={value.original}
        InputLabelProps={{ shrink: true }}
        onChange={onChange}
      />
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
        transition
      >
        {({ TransitionProps }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Fade {...TransitionProps} timeout={350}>
            <div className="flex flex-col w-[335px] my-5 rounded-lg bg-[#242424] py-2 px-3 shadow-[4px_4px_20px_0px_rgba(0, 0, 0, 0.3)] font-[--font-ubuntu]">
              <Check
                isCheck={checkList.hasUpperCase}
                description="Have at least one uppercase letter"
              />
              <Check
                isCheck={checkList.hasLowerCase}
                description="Have at least one lowercase letter"
              />
              <Check
                isCheck={checkList.hasNumber}
                description="Have at least one number"
              />
              <Check
                isCheck={checkList.hasSpecial}
                description="Have at least one special character (!@#$...etc)"
                height="h-[50px]"
              />
              <Check
                isCheck={checkList.isLongerT8}
                description="Longer than 8 characters"
              />
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
