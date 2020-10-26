export const addItem = (inputName, inputPrice, inputCategory) => {
    return {
        type: "ADD_ITEM",
        payload: {
            text: inputName,
            price: inputPrice,
            category: inputCategory
        }
    }
}

export const deleteItem = (category, label) => {
    console.log("delete item action")
    return {
        type: "DELETE_ITEM",
        payload: {
            category, label
        }
    }
}

export const updateItem = (category, label, newName, newPrice) => {
    return {
        type: "UPDATE_ITEM",
        payload:{
            category, label, newName, newPrice
        }
    }
}

export const addCategory = (category) => {
    return {
        type: "ADD_CATEGORY",
        payload:{
            category
        }
    }
}
