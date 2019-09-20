import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeAndDate: new Date() }
    this.tick = this.tick.bind(this) 
  }


  tick() {
    const timeAndDate = this.state.timeAndDate
    const second = (timeAndDate.getSeconds() ) 
    const minute = (timeAndDate.getMinutes())
    const hours = (timeAndDate.getHours()) 

    if (second === 60) {
      timeAndDate.setSeconds(0)
      if (minute + 1 === 60) {
        timeAndDate.setMinutes(0) 
        if (hours + 1 === 24) {
          timeAndDate.setHours(0)
        } else {
          timeAndDate.setHours(hours + 1) 
        }
      } else {
        timeAndDate.setMinutes(minute + 1) 
      }
    } else {
      timeAndDate.setSeconds(second + 1)  
    }

    this.setState( { timeAndDate });
  }

  componentDidMount() { 
    this.abc = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.abc)
  }


  render() {
    const { timeAndDate } = this.state
    return (  
      <div className="clock">
        <h1>Clock</h1>
        <div id="time-and-date">
          <div>Time:{timeAndDate.getHours()} : {timeAndDate.getMinutes()} : {timeAndDate.getSeconds()}</div>
          <div>Date: Fri September {timeAndDate.getDate()} {timeAndDate.getFullYear()} </div>
        </div>
      </div>
    
    )
}
}

export default Clock;