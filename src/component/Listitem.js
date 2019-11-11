import React,{useState} from 'react';

const Listitem = (props) => {
    const [remove, setremove] = useState(props.title);
    const removeIndividualItem = () => {
        setremove(null);
        if(remove==null){
            document.getElementsByTagName("button").style.display="none";
        }
    }
    return (
        <div>
        {remove}
        {remove=== null ? null : <button onClick={removeIndividualItem}>Remove</button>}
        </div>
    );
};

export default Listitem;