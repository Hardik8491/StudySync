import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: Course[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Course>) => {
      console.log(state);
      
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        console.log(existingItem);
        
        existingItem.quantity += action.payload.quantity;
      } else {
        console.log(state.items);
        
        state.items.push({ ...action.payload });
      }
    
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.totalAmount -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        state.totalQuantity += action.payload.quantity - item.quantity;
        state.totalAmount += (action.payload.quantity - item.quantity) * item.price;
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});
console.log(cartSlice);


export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
