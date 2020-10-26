import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions';

function InputField(props) {

    const [name, setName] = useState("");

    const[price, setPrice] = useState("");

    const[category, setCategory] = useState("");
    const [disabled, setDisabled] = useState(true)

    return (
        <div className = "ml-16">
            <div className = "my-8">
                <input value={name} onChange={e => {setName(e.target.value)}} placeholder = "NAME" className = "inputColor border-2 border-black px-4 py-2 bg-transparent text-black"/>
                <input value = {price} onChange = {e => {setPrice(e.target.value)}} placeholder = "PRICE" className = "inputColor border-2 border-black px-4 py-2 ml-2 bg-transparent text-black"/>
            </div>
            <div>
                <select className = "bg-transparent ml-2" onChange={e => {
                    setCategory(e.target.value);
                    if (e.target.value !== -1) {
                        setDisabled(false);
                    } else {
                        setDisabled(true);
                    }
                }
                    } >
                    <option value={-1}>Alege o categorie</option>
                    {
                        props.elemente.map((el, idx) => {
                            return <option value={idx}>{el.name}</option>
                        })
                    }
                </select>
                <button onClick={() => props.addItem(name,price, category)} disabled={disabled}
                    className={`py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 ml-16 border-2 border-black`}>
                    ADD ITEM
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        elemente: state.categories.items
    }
}

export default connect(mapStateToProps, {
    addItem
})(InputField);
