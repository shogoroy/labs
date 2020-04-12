import React from "react"

interface Props {}

const CalenderPage: React.FC<Props> = () => {
  return (
    <div className="root">
      <div className="form-container">
        <form>
          <input id="year" className="data-input" />年
          <input id="month" className="data-input" />月
          <input id="date" className="data-input" />日
        </form>
      </div>
      <div>
        <table>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  )
}

export default CalenderPage
