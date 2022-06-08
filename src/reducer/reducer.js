
const initialValues={
    user:[],
    selectedUser:{}
}
export const userReducer=(state=initialValues,action)=>{
    switch(action.type){
        case 'GET_API' : 
        return{
            ...state,
            user:action.payload
        }
        break;
        case 'GET_DELETE' : 
        return{
            ...state,
        }
        break;
        case 'GET_UPDATE' : 
        return{
            ...state,
            selectedUser:action.payload
        }
        break;
        
        default:return state;
    }
}