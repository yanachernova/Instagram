import React, { useState, useEffect } from 'react'
import { db } from '../firebase';



const Home = ({ setAuth }) => {

    
    const [fbusers, setFbusers] = useState([])
    const [state, setState] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState({
        email: '',
        password: '',
        name: '',
    })

    const getUsers = async () => {
        db.collection('users').onSnapshot((querySnapshot) => {
            const docs = [];

            querySnapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setFbusers(docs)
        })
    }
    const registerUsers = async (e) => {
        e.preventDefault();
        await db.collection('users').doc().set(signup)
        setAuth(true)
    }
    const loginUsers = async (e) => {
        e.preventDefault()
        if (fbusers.filter(a => a.email === email && a.password === password).length > 0) {
            setAuth(true)
        } else {
            return
        }

    }

    const stateTrue = () => {
        setState(true)
    }
    const stateFalse = () => {
        setState(false)
    }


    useEffect(() => {
        getUsers()

    }, [])

    return (
        <>

            <div className="container">
                {

                    state ?
                        (
                            <>
                                <div id="signup">

                                    <div className="header">

                                        <h3>Sign Up</h3>

                                        <p>You want to fill out this form</p>

                                    </div>

                                    <div className="sep"></div>

                                    <form className="inputs" onSubmit={e => registerUsers(e)}>

                                        <input type="aaaaa" name='name' value={signup.name} placeholder="Name" onChange={e => setSignup({ ...signup, name: e.target.value })} />

                                        <input type="aaaaa" name='email' value={signup.email} placeholder="E-mail" autoFocus onChange={e => setSignup({ ...signup, email: e.target.value })} />

                                        <input type="aaaaa" name='password' value={signup.password} placeholder="Password" onChange={e => setSignup({ ...signup, password: e.target.value })} />

                                        <button className="login" type="button" onClick={() => stateFalse()}> Have an account? Sign In</button>

                                        <button type="submit" className="submit">SIGN UP</button>

                                    </form>

                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <div id="signup">

                                    <div className="header">

                                        <h3>Sign In</h3>

                                        <p>You want to fill out this form</p>

                                    </div>

                                    <div className="sep"></div>

                                    <form className="inputs" onSubmit={e => loginUsers(e)}>

                                        <input type="aaaaa" name='email' value={email} placeholder="E-mail" autoFocus onChange={(e) => setEmail(e.target.value)} />

                                        <input type="aaaaa" name='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                                        <button className="login" type="button" onClick={() => stateTrue()}> Don't ave an account? Sign Up</button>

                                        <button className="submit" >SIGN IN</button>

                                    </form>

                                </div>
                            </>
                        )
                }


            </div>
        </>
    )
}

export default Home;
