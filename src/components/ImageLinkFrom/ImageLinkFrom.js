import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = () =>{
    return(
        <div>
            <p className="f3 center">
            you can put your image link here !
            </p>
            <div className="center ">
                <div className="shadow-5 pa4 br4 flush ">
                    <input type="text" className="f4 pa2 w-70">
                    </input>
                    <button className="pa2 w-30 grow white link dib f4 bg-light-purple ">
                        detect
                    </button>

                </div>
                

            </div>

        </div>
        

            
    )
}
export default ImageLinkForm