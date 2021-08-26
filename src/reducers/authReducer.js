import { types } from "../types/types";

/*

    {
        uid: 32134j21h4213213,
        nombre: "Lucas"
    }

*/


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
            return { }
    
        default:
            return state;
    }



}

