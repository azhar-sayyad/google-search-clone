import React,{creatContext,useContext,useReducer } from "react";

export const StateProvider = ({reducer,initialState,childrean})=>(
    
    <StateContext.Provider value = {useReducer(reducer ,initialState)}>
    {Childrean}
    </StateContext.Provider>

);
export const useStateValue = ()=> useContext(StateContext)