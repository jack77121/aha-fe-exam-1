'use client'

import React, { useState } from 'react'

import dayjs from 'dayjs'

import OutlineTextFieldButton from '@/app/Styled/TextField'
import { ClickAwayListener, Fade, Popper } from '@mui/material'

import CustomCalendar from '.'

export default function OutlineCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const onClickAway = () => {
    setAnchorEl(null)
  }

  const onDateChange = (date: Date) => {
    setSelectedDate(date)
    onClickAway()
  }

  const onDateCancel = () => {
    setSelectedDate(undefined)
    setAnchorEl(null)
  }

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const openPopper = Boolean(anchorEl)

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className="flex justify-center items-center max-w-[90vw]">
        <OutlineTextFieldButton
          id="outlined-calendar-trigger"
          label="Birthday"
          variant="outlined"
          type="text"
          placeholder="mm/dd/yyyy"
          value={selectedDate ? dayjs(selectedDate).format('MM/DD/YYYY') : ''}
          InputLabelProps={{ shrink: true }}
          onClick={onClick}
          style={{
            caretColor: 'transparent',
          }}
          sx={{
            '.Mui-focused fieldset': {
              color: '#fff',
              border: '3px solid rgba(255,255,255, 1) !important',
            },
          }}
        />
        <Popper
          sx={{ zIndex: 1200 }}
          open={openPopper}
          anchorEl={anchorEl}
          placement="bottom-start"
          transition
        >
          {({ TransitionProps }) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Fade {...TransitionProps} timeout={350}>
              <div className="my-[14px]">
                <CustomCalendar
                  inputValue={selectedDate}
                  onConfirm={onDateChange}
                  onCancel={onDateCancel}
                />
              </div>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  )
}
