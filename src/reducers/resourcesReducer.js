import resources from '../mock/resources';

const INITIAL_STORE ={
    list: [...resources],
    loading: true,
    errors: {},
    count: 0,
};

export default (store = INITIAL_STORE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...store,
                count: action.payload
            }
            case "SUBMIT_FORM":
                const newResource = action.payload;
                newResource.id = store.list[store.list.length - 1].id + 1;
                return {
                    ...store,
                    list: [...store.list, newResource],
                }
            default: 
                return store;
    }
};