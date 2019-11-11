import React,{useState} from 'react';

const RemoveItem = (props) => {
    return (
        <div>
            <button onClick={props.click} >Remove All</button>
        </div>
    );
};

export default RemoveItem;