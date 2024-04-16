import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid'
import Box from "./Box";

function BoxList(){
    const [boxes, setBoxes] = useState([]);

    const delBox = id =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id))

    }


    const renderBoxes = boxes.map(box => (
        <Box
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            handleDelete={delBox}
        />
    ))
    

    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox])
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
                {renderBoxes}
            </div>
        </div>
    )
}

export default BoxList;