"use client"

import clsx from "clsx"
import React from "react"

import FormInput from "@/components/form-components/FormInput"

import type { FormValues } from "./type"
import { useViewModel } from "./useViewModel"

interface Props {}

const CalenderPage: React.FC<Props> = () => {
  const { form, weeks, targetDate, handleClick } = useViewModel()

  return (
    <div className={clsx("bg-white", "text-black", "p-12")}>
      <div className={"mb-12"}>
        <form.Form onSubmit={handleClick}>
          <>
            <FormInput<FormValues>
              id="year"
              name="year"
              type="number"
              formOptions={{ required: true, valueAsDate: true }}
            />
            年
            <FormInput<FormValues>
              id="month"
              name="month"
              type="number"
              formOptions={{ required: true, valueAsDate: true }}
            />
            月
            <FormInput<FormValues>
              id="date"
              name="date"
              type="number"
              formOptions={{ required: true, valueAsDate: true }}
            />
            日
            <form.Form onSubmit={handleClick} />
          </>
        </form.Form>
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
