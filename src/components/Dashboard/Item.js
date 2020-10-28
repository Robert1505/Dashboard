import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {deleteItem,updateItem} from '../../actions';

function Item({lab, p, category, deleteItem, updateItem}) {
    const [label, setLabel] = useState(lab);
    const [price, setPrice] = useState(p);
    useEffect(() => {
        setLabel(lab);
        setPrice(p);
    }, [lab, p]);
    return (
        <div className = "list-item">
                    <div className = "flex justify-between">
                        <div className = "font-bold text-xl">
                            <input className = "w-32 bg-transparent" type="text" value={label} onChange={(e) => setLabel(e.target.value)}/>
                        </div>
                        <div className = "font-bold text-xl">
                            <input className = "w-32 bg-transparent" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <button onClick={() => deleteItem(category, label)} className = "delete-button">Delete</button>
                        <button onClick={() => updateItem(category,lab,label, price)} className = "edit-button">Update</button>
                    </div>
        </div>
    )
}

export default connect(null,{
    deleteItem,updateItem
})(Item);