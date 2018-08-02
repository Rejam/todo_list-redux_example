# TodoList Example with Redux
From https://redux.js.org/basics/usagewithreact

## Separate Presentational and Container components
**Presentational**
- Visual
- No store access
- Data from props

**Container**
- Processing
- Store access
- Data from redux state

## Presentational Components

`TodoList` is a list showing visible todos.
- `todos: Array` is an array of todo items with `{ id, text, completed }` shape.
- `onTodoClick(id: number)` is a callback to invoke when a todo is clicked.

`Todo` is a single todo item.
- `text: string` is the text to show.
- `completed: boolean` is whether the todo should appear crossed out.
- `onClick()` is a callback to invoke when the todo is clicked.

`Link` is a link with a callback.
- `onClick()` is a callback to invoke when the link is clicked.

`Footer` is where we let the user change currently visible todos.

`App` is the root component that renders everything else.

## Container Components
`VisibleTodoList` filters the todos according to the current visibility filter and renders a TodoList.

`FilterLink` gets the current visibility filter and renders a Link.
- `filter: string` is the visibility filter it represents.

## Other Components
`AddTodo` is an input field with an “Add” button
- Could be a mix or split

