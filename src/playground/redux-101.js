import { createStore } from 'redux';

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions--an object that gets sent to the store 

//Increment the count (Action type 1)

//Dispatcher function listens to the action and changes the redux state

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));


