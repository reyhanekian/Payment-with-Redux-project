// 

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   list : [],
   historyList : [],
   selectedCard : [],
//    

}






const cardSlice = createSlice({
    name : "card",
    initialState,
    reducers:{
        addCard : (state , action) => {
            state.list.push({
                id : state.list.length +1,
                ...action.payload
            })
        },

        // setCardDetails : (state , action ) => {
        //     return{...state , ...action.payload}
        // },

        setCardDetails: (state, action) => {
            state.selectedCard = action.payload;
          },

       negetiveInventory : (state , action) => {
        const {negetivePrice , id} = action.payload

        state.list = state.list.map((card)=>
            card.id === id && card.inventory >= negetivePrice
            ?{...card , inventory: card.inventory - negetivePrice}
            :card
         
        
        );

        const updateCard = state.list.find(card => card.id === id);
         if(updateCard){
            state.historyList = [...state.historyList, { ...updateCard , p: negetivePrice}]
         }
        
            
       }
       

       },
})

export const {addCard ,setCardDetails , negetiveInventory} = cardSlice.actions
export default cardSlice.reducer