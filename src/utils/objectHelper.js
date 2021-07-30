export const updateObjectInArray = (array, id, newState) => {
     return (el, index) => {
        if (el.id === id) {
            array[index] = {...array[index], ...newState}
            return false
        }
    }
}