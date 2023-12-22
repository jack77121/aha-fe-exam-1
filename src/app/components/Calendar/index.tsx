'use client'

import './index.css'

import React, { useCallback, useEffect, useState } from 'react'

import dayjs from 'dayjs'
import $ from 'jquery'
import Calendar, { OnArgs } from 'react-calendar'

import LeftArrow from '@/app/icons/LeftArrow'
import RightArrow from '@/app/icons/RightArrow'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

function formatWeekday(locale: string | undefined, date: Date) {
  return dayjs(date).format('dd')
}

interface CustomCalendarProps {
  title?: string
  onConfirm?: (date: Date) => void
  onCancel?: () => void
  inputValue?: Date | null
}

export default function CustomCalendar({
  title,
  onConfirm,
  onCancel,
  inputValue,
}: CustomCalendarProps) {
  const [value, onChange] = useState<Value>(inputValue!)
  const [double, setDouble] = useState(false)
  const [activeStartD, setActiveStartD] = useState<Date | undefined>(undefined)
  const [customView, setCustomView] = useState<OnArgs['view']>('month')
  const targetRef = React.useRef<HTMLDivElement>(null)

  const onDrillUp = useCallback(({ view }: { view: OnArgs['view'] }) => {
    if (view === 'month' || view === 'century') return
    if (view === 'year') setCustomView('decade')
    setDouble(true)
  }, [])

  const onDrillDown = useCallback(({ view }: { view: OnArgs['view'] }) => {
    if (view !== 'decade') {
      setDouble(false)
    }
    if (view === 'year') setCustomView('month')
  }, [])

  const onActiveStartDateChange = useCallback(
    ({ action, view, activeStartDate }: OnArgs) => {
      if (view === 'decade') {
        let setDate = dayjs(activeStartDate)
        if (action === 'next') {
          setDate = setDate.add(10, 'year')
        } else if (action === 'prev') {
          setDate = setDate.subtract(10, 'year')
        }
        setActiveStartD(setDate.toDate())
      } else {
        setActiveStartD(activeStartDate ?? undefined)
      }
    },
    []
  )

  const onViewChange = useCallback(({ view }: { view: OnArgs['view'] }) => {
    setCustomView(view)
  }, [])

  const onDateConfirm = () => {
    onConfirm?.(value as Date)
  }

  const onDateCancel = () => {
    onCancel?.()
  }

  useEffect(() => {
    if (!double || !targetRef || !targetRef.current) return
    const target = $(targetRef.current)
    target
      .find('.react-calendar--doubleView')
      .find('.react-calendar__navigation__label')
      .children()
      .first()
      .text(dayjs(value as Date).format('YYYY'))
      .nextAll()
      .css('display', 'none')
  }, [double, activeStartD])

  return (
    <div
      className="relative flex flex-col bg-[#181818] w-[320px] h-[469px] rounded-lg drop-shadow-[4px_4px_20px_rgba(0,0,0,0.3)]"
      ref={targetRef}
    >
      <div className="pt-[17px] pl-6 pb-[15px]">
        <div className="calendar-title">{title}</div>
        <div className="selected-date-title mt-1">
          {dayjs(value as Date).format('MMM, YYYY')}
        </div>
      </div>

      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
        prevLabel={<LeftArrow />}
        nextLabel={<RightArrow />}
        formatShortWeekday={formatWeekday}
        formatMonth={(locale, date) => dayjs(date).format('MMM')}
        minDetail="decade"
        calendarType="gregory"
        showDoubleView={double}
        onDrillUp={onDrillUp}
        onDrillDown={onDrillDown}
        onActiveStartDateChange={onActiveStartDateChange}
        activeStartDate={activeStartD}
        defaultView="month"
        view={customView}
        onViewChange={onViewChange}
      />
      <div className="absolute right-[27px] bottom-[16px] flex justify-end gap-[38px]">
        <button
          type="button"
          className="calendar-footer-button"
          onClick={onDateCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="calendar-footer-button"
          onClick={onDateConfirm}
        >
          OK
        </button>
      </div>
    </div>
  )
}

CustomCalendar.defaultProps = {
  title: 'Text',
  onConfirm: () => {},
  onCancel: () => {},
  inputValue: new Date(),
}
