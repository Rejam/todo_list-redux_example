import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions'

export function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(action.index === index) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    default:
      return state
  }
}