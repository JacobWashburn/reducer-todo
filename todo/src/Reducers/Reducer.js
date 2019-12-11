export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }];
        case 'UPDATE_COMPLETE':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });
        case 'REMOVE_COMPLETED':
            return action.payload;
        default:
            return state;
    }
};