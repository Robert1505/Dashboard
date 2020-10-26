import {combineReducers} from 'redux';

const INITIAL_STATE = {
    items: []
};


/*

items: [
    {
        name: "Calculatoare",
        elemente: [],
    },
    {
        name: "Telefoane",
        elemente: [],
    },
    {
        name: "Carti",
        elemente: [],
    },
    {
        name: "Haine",
        elemente: []
    }
]

*/

let newItems;

export const categoriesReducer = (oldState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            newItems = [...oldState.items];
            console.log("label", action.payload.label);
            /// am copiat lista de iteme din categoria itemului pe care vrem sa-l stergem
            newItems[action.payload.category].elemente = newItems[action.payload.category].elemente.filter(item => item.label !== action.payload.label);
            
            return {
                ...oldState,
                items: [...newItems]
        }
        case "ADD_CATEGORY":
            newItems = [...oldState.items];
            newItems.push({
                name: action.payload.category,
                elemente: []
            });
            return{
                ...oldState,
                items: [...newItems]
            }
        case "ADD_ITEM": 
            newItems = [...oldState.items];
            newItems[action.payload.category].elemente.push({
                label: action.payload.text,
                price: action.payload.price
            })
            return {
                ...oldState,
                items: [...newItems]
            }
        case "UPDATE_ITEM":
            newItems = [...oldState.items];
            for(let i = 0; i < newItems[action.payload.category].elemente.length; i++){
                if(newItems[action.payload.category].elemente[i].label === action.payload.label){
                    newItems[action.payload.category].elemente[i].label = action.payload.newName;
                    newItems[action.payload.category].elemente[i].price = action.payload.newPrice;
                }
            }
            return{
                ...oldState,
                items: [...newItems]
            }
        default: 
            return oldState;
    }
}

export default combineReducers({
    categories: categoriesReducer
});