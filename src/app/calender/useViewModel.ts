import dayjs from "dayjs"
import { useState } from "react"

import { useForm } from "@/components/form-components"

export const useViewModel = () => {
  const today = dayjs()

  const [targetDate, setTargetDate] = useState<number>(0)

  interface Week {
    id: string | number
    dates: number[]
    startDay: number
  }
  const [weeks, setWeeks] = useState<Week[]>([])

  const form = useForm({
    defaultValues: {
      year: today.year(),
      month: today.month() + 1,
      date: today.date(),
    },
  })

  const handleClick = () => {
    const { year, month, date } = form.formMethods.getValues()

    const targetDay = dayjs(`${year}-${month - 1}-${date}`)

    const endDate = targetDay.endOf("month").date()
    let day = targetDay.startOf("month").day()

    const weeks = []

    if (!isNaN(endDate) && !isNaN(day)) {
      let week = {
        id: 1,
        startDay: day,
        dates: new Array(day).fill(undefined),
      }

      for (let date = 1; date <= endDate; date++) {
        week.dates.push(date)
        day++

        if (day % 7 === 0) {
          weeks.push(week)
          day = 0
          week = {
            id: date + 1,
            startDay: 0,
            dates: [],
          }
        }
      }

      weeks.push(week)
    }

    setTargetDate(date)
    setWeeks(weeks)
  }

  return { weeks, targetDate, handleClick, form }
}
