import React,{useState} from 'react';

const AddItem = (props) => {
    return (
        <div>
            <form name="form" onSubmit={props.adding}>
              <input name="option" type="text" placeholder="Add item to the List"/>
             <button>Add Option</button>
            </form>
        </div>
    );
};

export default AddItem;