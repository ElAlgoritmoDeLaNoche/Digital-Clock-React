import React, { useState, useEffect } from 'react'
import './css/App.css'

function App() {

  const [time, setTime] = useState('')

  const formatTime = (val) => {
    if (val < 10) {
      return '0'
    } else {
      return ''
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  const tick = () => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()

    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);
  }

  return (
    <div className='clock no-seleccionable'>
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
}

export default App;
