import React from 'react'
import './Navigation.css'
const Navigation = ({onroutchange,route}) =>{
    if(route==='home'){
        return(
            <nav className="flex1">
                <p className="f3 link dim black underline pa3 pointer" onClick={()=>onroutchange('signin')}> 
                    sign out
                </p>
            </nav>
        );
    }
    else{
        return(
            <nav className="flex1">
                <p className="f3 link dim black underline pa3 pointer" onClick={()=>onroutchange('register')}> 
                    Register
                </p>
                <p className="f3 link dim black underline pa3 pointer" onClick={()=>onroutchange('signin')}> 
                    sign in
                </p>
            </nav>

        )
    }
      
}
export default Navigation