import clsx from "clsx"
import dayjs from "dayjs"
import React from "react"
import { useForm } from "react-hook-form"

interface Props {}

const CalenderPage: React.FC<Props> = () => {
  const today = dayjs()

  const [targetDate, setTargetDate] = React.useState<number>(0)

  interface Week {
    id: string | number
    dates: number[]
    startDay: number
  }
  const [weeks, setWeeks] = React.useState<Week[]>([])

  const { register, getValues } = useForm({
    defaultValues: {
      year: today.year(),
      month: today.month() + 1,
      date: today.date(),
    },
  })

  const handleClick = () => {
    const { year, month, date } = getValues()

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

  return (
    <div className={clsx("bg-white", "text-black", "p-12")}>
      <div className={"mb-12"}>
        <form>
          <input
            id="year"
            type="number"
            {...register("year", { required: true, valueAsDate: true })}
          />
          年
          <input
            id="month"
            type="number"
            {...register("month", { required: true, valueAsDate: true })}
          />
          月
          <input
            id="date"
            type="number"
            {...register("date", { required: true, valueAsDate: true })}
          />
          日
          <input type="button" value="表示" onClick={handleClick} />
        </form>
      </div>
      <div>
        <table>
          {/* these should be rendered by Array.map */}
          <tr>
            {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
              <th
                key={day}
                className={clsx(
                  "h-12",
                  "w-12",
                  "rounded-full",
                  "bg-[#303f9f]",
                  "text-white"
                )}
              >
                {day}
              </th>
            ))}
          </tr>

          {weeks.map((week) => (
            <tr key={week.id}>
              {week.dates.map((date) => (
                <td
                  key={date}
                  className={clsx(
                    "h-12",
                    "w-12",
                    "rounded-full",
                    "bg-white",
                    "text-black",
                    "text-center",
                    targetDate === date && ["bg-[#303f9f]", "text-white"]
                  )}
                >
                  {date}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default CalenderPage
