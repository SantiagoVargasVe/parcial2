import React, { useEffect, useState } from 'react'
import './HomesList.scss'
import { getHomes } from '../../services/utils'
import { Card } from '../../components/card/Card'
export const HomesList = () => {
  const [homes, setHomes] = useState([])

  useEffect(() => {
    getHomes().then((data) => setHomes(data))
  }, [])

  return (
    <div className="container home">
      <h1>Mis espacios</h1>
      <div className="home-list">
        {homes &&
          homes.map((home) => {
            return (
              <Card
                type={home.type}
                id={home.id}
                name={home.name}
                address={home.address}
              />
            )
          })}
      </div>
    </div>
  )
}
