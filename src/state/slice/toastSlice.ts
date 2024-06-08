import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '@/state/store'

export interface IToastState {
  autoClose: {
    duration: number;
  } | null;
  toast: {
    direction: 'top' | 'right' | 'bottom';
    text: string;
  } | null;
}

const initialState: IToastState = {
  autoClose: null,
  toast: null
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    CREATE_TOAST: (state, action) => {
      const { autoClose, toast } = action.payload;
    
      state.autoClose = autoClose;
      state.toast = toast;
    },
    CLOSE_TOAST: (state) => {
      state.autoClose = null
      state.toast = null;
    }
  }
})

export const { CREATE_TOAST, CLOSE_TOAST } = toastSlice.actions;
export const getToast = (state: RootState) => state.toast

export default toastSlice.reducer