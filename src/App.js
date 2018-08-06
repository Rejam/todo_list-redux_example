import React from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibileTodoList'
import Footer from './components/Footer'

const App = ({ match: { params } }) =>
  <div className="App">
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'}/>
    <Footer />
  </div>

export default App;
