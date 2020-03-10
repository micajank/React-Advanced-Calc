import React, { useState } from 'react';

function Addition(props) {
    return (
        <div className="answer-box">
            
         </div>

        {props.tasks.map((task, i) => (
            <li key={`task-${i}`} onClick={(e) => {
                props.removeTask(e, i);
            }}>(task)</li>
        ))}
    )
}

export default Addition;