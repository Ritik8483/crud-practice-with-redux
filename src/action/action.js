import axios from "axios"

const getApi=(apiData)=>{
    return{
        type:'GET_API',
        payload:apiData
    }
}
const getDelete=()=>{
    return{
        type:'GET_DELETE'
    }
}
const getUpdate=(getFormData)=>{
    return{
        type:'GET_UPDATE',
        payload:getFormData.data
    }
}


export const getApiData=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((response)=>{
            dispatch(getApi(response.data))
        })
        .catch((error)=>console.log(error));
    }
}
export const getApiDelete=(id)=>{
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            dispatch(getDelete());
            dispatch(getApiData());
        })
        .catch((error)=>console.log(error));
    }
}
export const getAddUser=(formData)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,formData)
        .then((response)=>{
            dispatch(getApiData())
        })
        .catch((error)=>console.log(error));
    }
}
export const getApiUpdate=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((response)=>{
            dispatch(getUpdate(response))
            // console.log('RES',response)
        })
        .catch((error)=>console.log(error));
    }
}
export const getUpdatedDetails=(id,edited_data)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,edited_data)
        .then((response)=>{
            dispatch(getApiData())
        })
        .catch((error)=>console.log(error));
    }
}