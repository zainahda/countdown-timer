import React, { Component, Fragment } from "react";
import "./App.css";

export class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: true,
  };

  componentDidMount() {
    this.setDate();
    this.counter();
  }
  // setting date
  setDate = () => {
    const targetTime = new Date("Jan 01, 2022 00:01:00").getTime();
    const currentTime = new Date().getTime();

    this.distance = targetTime - currentTime;

    if (this.distance < 0) {
      clearInterval(this.timer);
    } else {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      this.setState({
        days: Math.floor(this.distance / day),
        hours: Math.floor((this.distance % day) / hour),
        minutes: Math.floor((this.distance % hour) / minute),
        seconds: Math.floor((this.distance % minute) / second),
        isExpired: false,
      });
    }
  };
  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };
  render() {
    const { days, hours, minutes, seconds, isExpired } = this.state;
    console.log(days, hours, minutes, seconds);
    return (
      <Fragment>
        {isExpired ? (
          <div className="App" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1628827914238-14777320dd11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80")'}}></div>
        ) : (
          <div className="App" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601747297625-cf77828558db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80")'}}>
            <div className="countdown-container">
              <h2>New Year Countdown</h2>
              <div className="box-timer">
                <div className="days">
                  <h2>{days}</h2>
                  <p>DAYS</p>
                </div>
                <div className="hours">
                  <h2>{hours}</h2>
                  <p>HOURS</p>
                </div>
                <div className="minutes">
                  <h2>{minutes}</h2>
                  <p>MINUTES</p>
                </div>
                <div className="seconds">
                  <h2>{seconds}</h2>
                  <p>SECONDS</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
