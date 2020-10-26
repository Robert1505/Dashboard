import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addCategory} from '../../actions';

function InputField(props) {

    const[category, setCategory] = useState("");

    return (
        <div className = "text-center">
            <input  onChange={e => setCategory(e.target.value)} value={category} className = "inputColor border-2 border-black px-4 py-2 bg-transparent text-black" placeholder = "Ex: Calculatoare..."/>
            <button onClick = {() => props.addCategory(category)} className={`py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 ml-12 border-2 border-black`}>
                Add category
            </button>
        </div>
    )
}

export default connect(null,{
    addCategory
})(InputField);