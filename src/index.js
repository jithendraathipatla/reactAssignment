import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import RemoveItem from "./component/RemoveItem";
import Action from "./component/Action";
import LitItems from "./component/ListItems";
import AddItemButton from "./component/AddItem";

const App = () => {
    const [state, setstate] = useState([]);
    
    useEffect(() => {
        let retrival = localStorage.getItem("to-do-list");
        let real = JSON.parse(retrival);
        if(real){
            setstate(real);
        }
       
    }, []);

    const addingItemstoArray = (e) => {
        e.preventDefault();
        let options = e.target.elements.option.value.trim();
        let local = JSON.stringify([...state,options]);
             localStorage.setItem("to-do-list",local);
       
        if(options){
            setstate([...state,options]);
              e.target.reset();
        }

    }
    const handleRemove = () => {
        setstate([]);
       localStorage.clear();
    }
    return (
        <div>
         <Header title="Assignment" subtitle="Submitted By Jithendra Kumar"/><br/>
         <RemoveItem click={handleRemove}/>
         <Action items={state}/>
        
         <LitItems options={state}/>
         {state.length === 0 ? <p>Please add Items to get started</p> : null}
         <AddItemButton adding={addingItemstoArray}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


