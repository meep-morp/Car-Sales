
export const addNew = (id, car) => {
    return {
        type: "ADD_NEW",
        payload: {id: id, car: car},
    }
}

export const remove = (id, car) => {
    return {
        type: "REMOVE",
        payload: {id: id, car: car},
    }
}