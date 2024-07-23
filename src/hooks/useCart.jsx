import { useContext, useState } from "react";
import { cartContext } from "../cartContext";

export const useCart=() =>{
    const context = useContext(cartContext)
    if (context===undefined){
        throw new Error('use cart must be used inside a cartProvider');
    }

    return context
}