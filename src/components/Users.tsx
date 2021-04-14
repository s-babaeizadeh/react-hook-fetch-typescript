import axios from "axios"
import React, { useState, useEffect } from "react"

interface Props {
  id: number
  username: string
  name: string
  email: string
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<Props[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Props[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      setUsers(res.data)
    }
    fetchData()
  }, [])

  return (
    <ul>
      {users.map((user: Props) => (
        <div className="ui card " key={user.id} style={{ background: "pink" }}>
          <div className="content">
            <div className="header">Name: {user.name}</div>
          </div>
          <div className="content">
            <div className="ui sub header">UserName: {user.username}</div>
          </div>
          <div className="content">
            <div className="ui sub header">Email: {user.email}</div>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default Users
