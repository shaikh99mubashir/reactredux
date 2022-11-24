import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { edit } from '../../ReduxTool/LoginReducer'
import { add, del } from '../../ReduxTool/todoReducer'

const Home = () => {
    const Data = useSelector((a)=> a.loginReducer)
    const todoR = useSelector((a)=> a.todoReducer)
    console.log('todoR',todoR)
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const addTodo = () =>{
      setTodoList([...todoList, todo])
      dispatch(add(todoList))
      setTodo('')
    }
    
    const  editBtn =(index)=>{
      const editValue = prompt('enter edit Value')
      setTodoList(todoList.map((e,i)=> {
        if(index == i){
          return(
            editValue
            )
          }
          else{
            return(
              e
              )
            }
          }))
          dispatch(edit(todoList))
      // if(evevt){
      //   setTodo(editValue)
      //   dispatch(edit(todoList))
      // }
      
    }

   console.log(todoList,"lfadas") 

    const delet = (index) =>{
      setTodoList(todoList.filter((e, i)=> index !== i))
      dispatch(del(todoList))
    }

  return (
    <>
    <h1>TODO</h1>
    <h1>Hello {Data.userName}</h1>
      <br/>
      <br/>
      <input type="text" label='Enter ToDo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={addTodo}>+</button>
    <div style={{marginTop:10}}>
      {todoR.todo.map((e,i)=> 
      <div style={{margin:10}}>
        <li key={i}>
     {e}
     <button style={{margin:5}} onClick={()=>editBtn(i)}>edit</button>
     <button style={{margin:5}} onClick={()=>delet(i)}>del</button>
    </li>
      </div>
      )}
    </div>
    </>
  )
}

export default Home