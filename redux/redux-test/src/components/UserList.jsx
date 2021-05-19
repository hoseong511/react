import axios from "axios"
import { useEffect } from "react"

export default function UserList({ users, start, success, fail }) {
  useEffect(() => {
    const getUsers = async () => {
      try {
        start();
        const res = await axios.get('https://api.github.com/users')
        success(res.data);
      } catch (error) {
        console.error(error);
        fail(error);
      }
    }
    getUsers();
  }, [start, success, fail])
  
  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>
  }
  return (
    <ul>
      {users.map( user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  )
}