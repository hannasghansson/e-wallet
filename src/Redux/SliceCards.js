import { createSlice } from "@reduxjs/toolkit";
  

const SliceCards = createSlice({
    name:"Cards",
    initialState: {
        cardInfo: [
            {
                Vendor: 'Handelsbanken',
                Type: 'Allkort',
                id: 1,
                active: true,
                CardNumber: '1234 12345678 1234',
                Cardholder: '',
                Month: '10',
                Year:'23',
                cvc:'123'
            }

        ],
        letestID: 2,
        
    },
    reducers: {
        addCard: (state,action) => {
            state.cardInfo.push(action.payload)
            console.log(action.payload)
            state.letestID += 1;

        }, 

        makeActive: (state, action) => {
            console.log(action.payload);
            state.cardInfo.forEach((card) => {
                if (card.id === action.payload){
                    card.active = true
                }else{
                    card.active = false
                }
            });
        },

        removeCard: (state, action) => {
            console.log('hej');
            state.cardInfo = state.cardInfo.filter((card) => card.id !== action.payload);
            
        }



        /*
        removeCard: (state, action) => {
            state.cardInfo = state.card.filter((card) => card.id !== action.payload);
        }
        */


    },

})

export const {addCard, removeCard, makeActive  } = SliceCards.actions;
export default SliceCards.reducer
