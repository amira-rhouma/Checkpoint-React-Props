
import React from 'react'

function ProfileComponent ({FullName,bio,profession, handleName}) {
    return (
        <div>
        
        { <img src="/img.jpg" />}  
        <h1>My name is {FullName} </h1>
        <h1> I am {bio} years old </h1>
        <h1> I am a {profession} in GOMYCODE institute </h1>
        { handleName()}
        </div>
    )
}

export default ProfileComponent;

