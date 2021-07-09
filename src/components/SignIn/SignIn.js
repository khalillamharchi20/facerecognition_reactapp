import React, { useState } from 'react'
const SignIN=({onroutchange,update_user})=>{
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const on_email_change=(event)=>{
        setemail(event.target.value)
    }
    const on_password_change=(event)=>{
        setpassword(event.target.value)
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(
            {
                email:email,
                password:password
            }
        )
    };
    

    const on_submit=async (event)=>{
        event.preventDefault()

        const res = await fetch('http://localhost:3000/signin',requestOptions)
        const data = await res.json()
       
        if (data==='failed')
        {
            alert("no such user")

        }
        else{
                onroutchange('home')
                update_user(data)

            
        }
       
        

        }

        
    

    return(
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                    <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={on_email_change} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={on_password_change} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="center">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" type="submit" value="Sign in" onClick={on_submit} />
                    </div>
                    <div className="lh-copy mt3 center">
                        <p onClick={()=>onroutchange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </form>
            </main>

            </article>
    
    ); 
}
export default SignIN