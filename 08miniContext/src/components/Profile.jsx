// this component is for the fetching the context i.e. global varibale
import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login first to view username!</div>
    return <div>Welcome in the profile section: {user.username}</div>
}

export default Profile