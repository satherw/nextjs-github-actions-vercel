import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {AppState} from './store'

export interface ToolState {
  pairProgrammingTool: string
}

const initialState: ToolState = {
  pairProgrammingTool: "",
}

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    // Use the PayloadAction type to declare the contents of `action.payload`
    updateTool: (state, action: PayloadAction<string>) => {
      state.pairProgrammingTool = action.payload
    },
  },

})

export const {updateTool} = toolSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTool = (state: AppState) => state.tool.pairProgrammingTool

export default toolSlice.reducer