import React from 'react'

import { useParams } from 'react-router-dom'

const Profile = () => {

    let {useId}=useParams();
  return (
    <div>
        <h3>Profile</h3>
        <p>The id of this user is {useId}</p>
    </div>
  )
}

export default Profile