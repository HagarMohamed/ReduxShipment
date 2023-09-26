import axios from "axios";
import {
    AllDATA,
    DELETE,
    ONEITEM,
    UPDATE,
    shipmentApi
} from "../Types/type";
import {
    localData
} from "../Data/data";

export const getAllData = () => {

    return async (dispatch) => {
        try {
            const res = await axios.get(shipmentApi);
            console.log(res);
            dispatch({
                type: AllDATA,
                data: res.data
            })
        } catch (error) {
            dispatch({
                type: AllDATA,
                data: localData
            })
        }

    }


}

export const getDetails = (orderNo) =>{
    return (dispatch) => {
        dispatch({
            type: ONEITEM,
            data: orderNo
        })
    }

}

export const handleDelete = (orderNo) => {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            data: orderNo
        })
    }
}

export const handleUpdate = (orderNo,date,customer,trackingNo,status,consignee) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE,
            data: {orderNo:orderNo,date:date,customer:customer,trackNo:trackingNo,status:status,consignee:consignee}
        })
    }
}