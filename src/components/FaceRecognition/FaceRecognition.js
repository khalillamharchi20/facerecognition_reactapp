import React from 'react'
import './FaceRecognition.css'
const FaceRecognition=({url,box})=>{
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img src={url} id="image1" width="500px" height="auto">
                </img>

                <div className="bounding_box" style={{top:box['toprow'],right:box['rightcol'],bottom:box['bottomrow'],left:box['leftcol']}}>
                </div>

            </div>
            
        </div>

    );
}
export default FaceRecognition