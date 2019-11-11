import React,{useState, useEffect} from 'react';
import Modal from "./Modal";

const Action = (props) => {
  const [modalvalue,setmodalvalue] = useState("");
  const [settinginitial, setsettinginitial] = useState(false);
  const [content, setcontent] = useState("");
  
  const handlePick = () => {  
         const randomNum = Math.floor(Math.random()*modalvalue.length);
         const opt = modalvalue[randomNum];
         setsettinginitial(true);
         setcontent(opt);
    }

    const handelingmodel = () => {
        setsettinginitial(false);
    }

    return (
        console.log(modalvalue),
        <div>
            <button onClick={handlePick} >What should I do?</button>
            <Modal openclose={modalvalue} initial={settinginitial} click={handelingmodel} content={content}/>
        </div>
    );
};

export default Action;