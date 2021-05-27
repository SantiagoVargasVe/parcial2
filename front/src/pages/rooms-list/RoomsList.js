import React, { useEffect, useState } from 'react'
import './RoomsList.scss'
import Table from 'react-bootstrap/Table'
import { getRooms } from '../../services/utils'
import { useParams } from 'react-router-dom'
import { RoomCard } from '../../components/card/RoomCard'
export const RoomsList = () => {
  const [rooms, setRooms] = useState([])
  const [devices, setDevices] = useState(undefined)
  let { homeId } = useParams()
  useEffect(() => {
    getRooms(homeId).then((data) => setRooms(data))
    console.log('Se ejecuto el use Effect')
  }, [devices])
  const useHandleClick = (roomId) => {
    let temp_devices = []
    rooms.forEach((room) => {
      if (room._id == roomId) {
        temp_devices.push(...room.devices)
      }
    })
    setDevices(temp_devices)
  }

  console.log(devices)
  return (
    <div className="container rooms">
      <h1>My rooms</h1>
      <div className="list-table">
        <div className="room-list">
          {rooms &&
            rooms.map((room) => {
              return (
                <RoomCard
                  gotClick={useHandleClick.bind(this)}
                  type={room.type}
                  homeId={homeId}
                  id={room._id}
                  name={room.name}
                />
              )
            })}
        </div>
        {devices ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{devices[0].name}</th>
                <th>ID</th>
                <th>Device</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => {
                console.log(device)
                return (
                  <tr>
                    <td>{devices.indexOf(device)}</td>
                    <td>{device.id}</td>
                    <td>{device.name}</td>
                    <td>
                      {device.desired.unit != 'boolean'
                        ? ''.concat(device.desired.value, device.desired.unit)
                        : device.desired.unit}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        ) : (
          <p>No hay room id</p>
        )}
      </div>
    </div>
  )
}
