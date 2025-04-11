import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: nanoid(), name: "rahul", isCompleted: false }]
export const todoSlices = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo(state, action) {
            const { name, isCompleted } = action.payload;
            state.push({ id: nanoid(), name: name, isCompleted: isCompleted })
        },
        deleteToDo(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
        ,
        setComplete(state, action) {
            const { id, flag } = action.payload;
            const todo = state.find(item => item.id === id);
            //  console.log(todo)
            if (todo) {
                todo.isCompleted = flag;
            }

        }
        ,
        updateTodo(state, action) {
            const { id, data } = action.payload;
            const todo = state.find(item => item.id === id);
            if (todo) {
                todo.name = data;
            }
        }
    }
});

export const { addTodo, deleteToDo, setComplete , updateTodo} = todoSlices.actions;
export default todoSlices.reducer;
