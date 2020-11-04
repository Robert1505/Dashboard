import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';

export default function List(props) {

    return (
        <div className = "text-center mt-8">
            <div className = "font-bold underline" >
                {
                    props.elemente.map((el, idx) => {
                        return <Item key={`item-${idx}`} name={el.name}/>
                    })
                }
            </div>
        </div>
        
    )
    
}
