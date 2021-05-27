const HOME_API = '/api/homes'

const getHomes = async () => {
  const response = await fetch(' http://localhost:3001/api/homes')
  const data = await response.json()

  return data
}

const getRooms = async (id) => {
  const response = await fetch(`http://localhost:3001/api/homes/${id}`)
  const data = await response.json()
  return data.rooms
}

export { getHomes, getRooms }
