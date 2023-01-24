import {useSelector} from 'react-redux'

export default function Profile() {
    const username = useSelector((state: any) => state.user.value.username)

  return (
    <div>
        <h1>This is profile page</h1>
        <h2>Username: {username}</h2>
    </div>
  )
}
