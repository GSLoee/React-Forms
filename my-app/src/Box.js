import React, {useState} from "react";

function Box({id, color, width, height, handleDelete}){
    const delBox = () => handleDelete(id)

    return (
        <div>
            <div
            style = {{
                width:`${width}px`,  
                height: `${height}px`,
                backgroundColor: color
                }} 
            >
            

            </div>

            <button onClick={delBox}>X</button>
        </div>
    )
}

export default Box;