import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    
      ]; 
    
    
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser: (state,action) =>{
            state.push(action.payload);
        },
        editUser: (state, action) =>{
            const {id, ime, email} = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if(existingUser){
                existingUser.ime = ime;
                existingUser.email = email;
            }

        },

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const deleteUser = state.find((user) => user.id === id);
            if(deleteUser){
                return state.filter((user) => user.id !== id);
            }
        }
    },
});

export default userSlice.reducer;
export const {addUser, editUser, deleteUser} = userSlice.actions;

