import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {AppState} from './store'

export interface ToolState {
  title: string
}

const initialState: ToolState = {
  title: "Hello World",
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {

    // Use the PayloadAction type to declare the contents of `action.payload`
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },

})

export const {updateTitle} = slice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTitle = (state: AppState) => state.slice.title

export default slice.reducer