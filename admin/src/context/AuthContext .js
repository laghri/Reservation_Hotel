
import { createContext, useEffect, useReducer } from "react";


const INITILA_STATE ={
   user:JSON.parse(localStorage.getItem("user")) || null,
   loading:false,
   error:null
}


export const AuthContext =createContext(INITILA_STATE)

const AuthReducer =(state,action) =>{
    switch(action.type) {
      case "LOGIN_START":
        console.log("noooo")
        return {
            user:null,
            loading:true,
            error:null
        };
        case "LOGIN_SUCCESS":
            console.log("noooooooooo")
            return {
            
                user:action.payload,
                loading:false,
                error:null
            };
        case "LOGIN_FAILURE":
            console.log("noo")
                return {
                    user:null,
                    loading:false,
                    error:action.payload,
            };
        case "LOGOUT":
           
                return {
                    user:null,
                    loading:false,
                    error:null,
            };

        default:
          return state
    }
};

export  const AuthContextProvider =({children})=>{
    const [state,dispatch] =useReducer(AuthReducer,INITILA_STATE);

   useEffect(()=>{
      localStorage.setItem("user",JSON.stringify(state.user));
   },[state.user])

    return <AuthContext.Provider  
    value={{user:state.user,
           loading:state.loading,
           error:state.error,
           dispatch}}>
          {children}
    </AuthContext.Provider>
}