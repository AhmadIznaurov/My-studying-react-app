import React from 'react';

function Message(props) {
    return (
        <div>
            <p>Hello, I'm {props.name}, I'm {props.age} years old.</p>
        </div>
    );
}

export default Message;


//Here it is