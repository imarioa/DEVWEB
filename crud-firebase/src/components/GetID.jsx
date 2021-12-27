import React from 'react';
import { useParams } from 'react-router-dom'
import Edit from './Edit';
import FirebaseContext from '../utils/FirebaseContext'

function GetId() {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <FirebaseContext.Consumer>
                {firebase => <Edit firebase={firebase} id={id} />}
            </FirebaseContext.Consumer>
        </div>
    );
}

export default GetId;