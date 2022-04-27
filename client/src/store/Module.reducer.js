import { INIT_ORDERED_FOOD, SET_ORDERED_FOOD, SET_INFO_CLIENT } from "./Module.action";

const initState = {
    listFood: [],
    infoClient: [],
}

export const foodReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ORDERED_FOOD:
            let updateData = [];
            if (action.payload.length === undefined) {
                const checkExsitFood = state.listFood.findIndex(item => item._id === action.payload._id);
                if (checkExsitFood !== -1) {
                    // const temp = state.listFood.filter(item => item.id === action.payload.id);
                    // const updatedFood = {
                    //     ...temp[0],
                    //     quanityOrdered: temp[0].quanityOrdered + 1,
                    //     time: action.payload.time
                    // }
                    const temp = [
                        ...state.listFood.filter(item => item._id !== action.payload._id),
                        action?.payload];
                    updateData = temp;
                } else {
                    updateData = [...state.listFood, action.payload];
                }
            } else {
                updateData = action.payload
            }
            const dt = updateData.sort((a,b) => a.name.localeCompare(b.name));
            return {
                ...state,
                listFood: dt,
            }

        case INIT_ORDERED_FOOD:
            const data = action.payload.sort((a,b) => a.name.localeCompare(b.name));
            return {
                ...state,
                listFood: data
            }
        case SET_INFO_CLIENT: 
            const attr = action.payload[0];
            const value = action.payload[1];
            return {
                ...state,
                ...state.infoClient,
                attr: value,
            }
        default:
            return state;
    }
}