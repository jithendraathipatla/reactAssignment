import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';

const Modalabc = (props) => {
    console.log(props);
    const[content,setcontent] = useState("");
    return (
        <Modal
         isOpen={props.initial}
         contentLabel={props.content}
         ariaHideApp={false}>
            {props.content}
          <button onClick={props.click}>Close Modal</button>
        </Modal>
    );
};

export default Modalabc;