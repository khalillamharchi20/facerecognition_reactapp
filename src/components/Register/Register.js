import React , { Component, useEffect, useState }from 'react'
const Register=({onroutchange,update_user})=>{
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[nom,setnom]=useState('')
    const on_email_change=(event)=>{
        setemail(event.target.value)
    }
    const on_password_change=(event)=>{
        setpassword(event.target.value)
    }
    const on_name_change=(event)=>{
        setnom(event.target.value)
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(
            {
                password:password,
                email:email,
                name:nom
            }
        )
    };
    const on_submit=async (event)=>{
        event.preventDefault()

        const res = await fetch('http://localhost:3000/register',requestOptions)
        const data = await res.json()
        console.log(data)
        
        if(data ==='empty shamps is not allowed')
        {
            alert("empty shamps is not allowed")
            
        }
        else if(data==='email already in use')
        {
            alert('email already in use')
        }
        else {
            onroutchange('home')
            update_user(data[0])

        }

        }
    return(
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                    <legend className="f1 fw6 ph0 mh0 center">Sign UP</legend>
                    <div class="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Name</label>
                        <input onChange={on_name_change} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={on_email_change} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div class="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={on_password_change} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="center">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3" type="submit" value="Sign UP" onClick={on_submit} />
                    </div>
                    
                </form>
            </main>

            </article>
    
    ); 
}
export default Register