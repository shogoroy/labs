import { makeStyles } from "@material-ui/core/styles"
import dayjs from "dayjs"
import React from "react"
import { useForm } from "react-hook-form"

interface Props {}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#ffffff",
    color: "#000",
    padding: "50px",
  },
  formContainer: {
    marginBottom: "50px",
  },
  weekDay: {
    height: "50px",
    width: "50px",
    borderRadius: "25px",
    backgroundColor: "#303f9f",
    color: "#ffffff",
  },
  date: {
    height: "50px",
    width: "50px",
    borderRadius: "25px",
    backgroundColor: "#ffffff",
    color: "#000000",
    textAlign: "center",
  },
  targetDate: {
    backgroundColor: "#303f9f",
    color: "#ffffff",
  },
}))

const CalenderPage: React.FC<Props> = () => {
  const today = dayjs()

  const [targetDate, setTargetDate] = React.useState<number>(0)

  interface Week {
    id: string | number
    dates: number[]
    startDay: number
  }
  const [weeks, setWeeks] = React.useState<Week[]>([])
  const classes = useStyles()

  const { register, getValues } = useForm({
    defaultValues: {
      year: today.year().toString(),
      month: (today.month() + 1).toString(),
      date: today.date().toString(),
    },
  })

  const handleClick = () => {
    const { year, month, date } = getValues()

    const targetDay = dayjs(`${year}-${parseInt(month) - 1}-${date}`)

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

    setTargetDate(parseInt(date))
    setWeeks(weeks)
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <form>
          <input
            id="year"
            name="year"
            type="number"
            ref={register({ required: true })}
          />
          年
          <input
            id="month"
            name="month"
            type="number"
            ref={register({ required: true })}
          />
          月
          <input
            id="date"
            name="date"
            type="number"
            ref={register({ required: true })}
          />
          日
          <input type="button" value="表示" onClick={handleClick} />
        </form>
      </div>
      <div>
        <table>
          {/* these should be rendered by Array.map */}
          <tr>
            <th className={classes.weekDay}>日</th>
            <th className={classes.weekDay}>月</th>
            <th className={classes.weekDay}>火</th>
            <th className={classes.weekDay}>水</th>
            <th className={classes.weekDay}>木</th>
            <th className={classes.weekDay}>金</th>
            <th className={classes.weekDay}>土</th>
          </tr>

          {weeks.map(week => (
            <tr key={week.id}>
              {week.dates.map(date => (
                <td
                  key={date}
                  className={
                    targetDate === date
                      ? [classes.date, classes.targetDate].join(" ")
                      : classes.date
                  }
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
