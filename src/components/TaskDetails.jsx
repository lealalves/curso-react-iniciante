import React from 'react';
import { useHistory, useParams } from 'react-router';
import Button from './Button';


import './TaskDetails.css'

const TaskDetais = () => {
    const params = useParams()
    const history = useHistory()


    const handleBackButtonClick = () =>{
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti eveniet quo expedita nisi eum, at veniam nobis animi dolores provident architecto consequuntur 
                    iure reprehenderit suscipit, soluta quibusdam corrupti dignissimos veritatis?
                </p>
            </div>
        </>
    );
}

export default TaskDetais;