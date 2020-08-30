import React from 'react'

const Main = ({setAuth}) => {
    const logOut = () => {
        setAuth(false)
       
    }
 
    return (
        <div>
            <button onClick={() => logOut()}>Logout</button>
        </div>
    )
}

export default Main
