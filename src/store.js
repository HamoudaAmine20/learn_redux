
import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'all', // Possible values: 'all', 'done', 'not_done'
};

// Actions
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const editTask = (id, updatedTask) => ({
  type: 'EDIT_TASK',
  payload: { id, updatedTask },
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload.updatedTask : task
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);

export default store;
