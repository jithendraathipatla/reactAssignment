import React,{useState} from 'react';
import ListItem from "./Listitem";



const ListItems = (props) => {
    const varying = () => {
        
        return(
            props.options.map((item,i)=>{
                return(
                    <div key={i}>
                     <ListItem title={item}/>
                    </div>
                )
            })
        )
    }
    return (
        <div>
        
          {varying()}
        </div>
    );
};

export default ListItems;