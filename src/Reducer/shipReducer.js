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
            // const selectedShipItem =  state.detail
            // const updatedShipItem = action.data

            // selectedShipItem.date = .date

            const updatedShipItem = state.data.find((item) => item.orderNo === action.data.orderNo);
            updatedShipItem.date = action.data.date
            updatedShipItem.customer = action.data.customer
            updatedShipItem.trackingNo = action.data.trackingNo
            updatedShipItem.status = action.data.status
            updatedShipItem.consignee = action.data.consignee

            return {
                detail: action.data,
                data: state.data
            };
        default:
            return state;
    }

}