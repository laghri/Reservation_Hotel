import { createContext, useReducer } from "react";


const INITILA_STATE ={
    city:undefined,
    dates :[],
    options :{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}


export const SearchContext =createContext(INITILA_STATE)

const SearchReducer =(state,action) =>{
    switch(action.type) {

        case "NEW_SEARCH":
            return action.payload;
        case "REST_SEARCH":
          return INITILA_STATE;
        default:
          return state
    }
};

export  const SearchContextProvider =({children})=>{
    const [state,dispatch] =useReducer(SearchReducer,INITILA_STATE);



    return <SearchContext.Provider  value={{city:state.city ,dates:state.dates,options:state.options,dispatch}}>
          {children}
    </SearchContext.Provider>
}