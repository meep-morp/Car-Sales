
export const addNew = (id) => {
    return {
        type: "ADD_NEW",
        payload: id,
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        payload: id,
    }
}