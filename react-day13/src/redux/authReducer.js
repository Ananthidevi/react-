//global state 

const initalState = {
    user:null,
    error:null//inital state
};

export default function authReducer(state = initalState,action){
    switch(action.type){
        case 'LOGIN_SUCESS':
            return{
                ...state,user:action.payload, error: null//if success 
            }//payload data carry from 

              case 'LOGIN_ERROR':
            return{
                ...state,user:action.payload
            };
               case 'REGISTER_SUCESS':
            return{
                ...state,user:action.payload, error: null
            }
               case 'LOGOUT':
            return{
                ...state,user:null, error: null
            }
            default:
                return state;

    }

}