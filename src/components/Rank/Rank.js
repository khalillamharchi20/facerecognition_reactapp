import React, { useEffect,useState } from 'react'
import './Rank.css'
const Rank=({user})=>{
    return(
        <div >
            <div className="white f3 center">
                {user.name} your current entries ...

            </div>
            <div className="white f1 center" id="khalil">
                #{user.entries}

            </div>
        </div>
    )
}
export default Rank