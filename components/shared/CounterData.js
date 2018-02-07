import React, { Component } from 'react'

class CounterData extends Component {

  render () {
    return (
      <div
        className="counterContainer"
      >
        <div className="counterItem">
          <h3>45</h3>
          <img src="/static/icons/mobility-icons/truck.svg" />
        </div>
        <div className="counterItem">
          <h3>12</h3>
          <img src="/static/icons/mobility-icons/bus.svg" />
        </div>
        <div className="counterItem">
          <h3>8</h3>
          <img src="/static/icons/mobility-icons/car.svg" />
        </div>
        <div className="counterItem">
          <h3>6</h3>
          <img src="/static/icons/mobility-icons/scooter.svg" />
        </div>
        <div className="counterItem">
          <h3>2</h3>
          <img src="/static/icons/mobility-icons/bike.svg" />
        </div>
        <div className="counterItem">
          <h3>2</h3>
          <img src="/static/icons/mobility-icons/human.svg" />
        </div>
        <style jsx>{`
          .counterContainer{
            width: 30rem;
            height: 12rem;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-wrap: wrap;
          }
          .counterContainer img{
            margin-left: 0.5rem;
            margin-top: 0.2rem;
          }
          .counterItem{
            width: 10rem;
            height: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    )
  }
}

export default CounterData
