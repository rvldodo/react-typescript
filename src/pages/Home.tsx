import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../store'

export default function Home() {
    const [newUsername, setNewUsername] = useState<string>("")

    const dispatch = useDispatch()
    const username = useSelector((state: any) => state.user.value.username)

  return (
    <div>
        <h1>This is home page for login</h1>
        <h2>Username: {username}</h2>
        <input type="text" onChange={(e) => setNewUsername
        (e.target.value)}/>
        <button onClick={() => dispatch(login({ username: newUsername }))}>login</button>
        <button onClick={() => dispatch(logout())}>logout</button>
    </div>

  )
}
