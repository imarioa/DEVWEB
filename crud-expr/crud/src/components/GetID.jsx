import React from 'react';
import { BrowserRouter, useParams } from 'react-router-dom'
import Edit from './Edit';

function GetId() {

    const { id } = useParams();
    console.log(id);
 
   


    return (
        <div>
            <Edit id={id} />
        </div>
    );
}

export default GetId;