import React, { useState } from 'react';
import {TodoList} from './components/TodoList'
import {NewTodo} from './components/NewTodo'
import {Todo} from './todo.model'
import { Grid } from '@material-ui/core';
import {Header} from './components/Header'


function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string, name: string, date: string) => {
    setTodos(prevTodos => 
      [...prevTodos, {id: Math.random().toString(), text: text, name: name, date: date}]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }


  return (
    <div className="App">
    <Grid container direction='column'>
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}/>
          <Grid item xs={10} sm={8}>
            <NewTodo onAddToDo={todoAddHandler} />
          </Grid>
        <Grid item xs={1} sm={2}/>
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}/>
          <Grid item xs={10} sm={8}>
            <TodoList items={todos} onDeleteToDo={todoDeleteHandler}/>
          </Grid>
        <Grid item xs={1} sm={2}/>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
