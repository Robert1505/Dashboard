import React from 'react'
import Item from './Item';
import {connect} from 'react-redux';
import {deleteItem} from '../../actions';

function ListDashboard(props) {
    console.log("list props", props.elemente[props.category]);
    return (
        <div>
                {
                props.elemente[props.category].elemente.map((element, idx) => (
                   <Item key={idx} lab={element.label} p={element.price} category = {props.category} />
                ))
                }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        elemente: state.categories.items
    }
}

export default connect(mapStateToProps, {
deleteItem
})(ListDashboard);