import {
    AllDATA,
    DELETE,
    ONEITEM,
    UPDATE
} from "../Types/type";


const intialValue = {
    data: [],
    detail: {}
}


export const shipReducer = (state = intialValue, action) => {

    switch (action.type) {
        case AllDATA:
            return {
                data: action.data

            };
        case ONEITEM:
                const shipItem = state.data.find((item) => item.orderNo === action.data);
                console.log(shipItem);
                return {
                    detail: shipItem,
                    data: state.data

                };
        case DELETE:
            const result = state.data.filter((item) => item.orderNo !== action.data);
            return {
                data: result
            };

        case UPDATE:
            
            return {
                detail: state.detail,
                data: state.data.map((shipItem) =>{
                    if(shipItem.orderNo === action.data.orderNo){
                        return action.data
                    }else{
                       return shipItem 
                    }
                })
            };
        default:
            return state;
    }

}