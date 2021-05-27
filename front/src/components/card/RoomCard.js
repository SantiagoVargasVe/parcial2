import React from 'react'
import { Link } from 'react-router-dom'
import './RoomCard.scss'

export const RoomCard = (props) => {
  const handleClick = () => {
    props.gotClick(props.id)
  }
  return (
    <div className="card card-home">
      <div className="card-home-body">
        <div className="card-home-body-description">
          <h5 className="card-home-title">{props.name}</h5>
        </div>
      </div>
      <Link
        className="card-home-img-link"
        to={`/homes/${props.homeId}/${props.id}`}
      >
        {props.type === 'kitcken' ? (
          <img
            src="/kitchen.png"
            className="card-home-img-top"
            alt="Icon kitchen"
            onClick={handleClick}
          />
        ) : (
          <img
            src="/living-room.png"
            className="card-home-img-top loft"
            alt="Icon room"
            onClick={handleClick}
          />
        )}
      </Link>
    </div>
  )
}
