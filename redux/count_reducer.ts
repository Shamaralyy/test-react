//count_reducer.ts
const initState = 0;
function countReducer(preState = initState, action: { type: any; data: any; }) {
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}

export default countReducer;