import {useState} from 'react';
import './App.css';

function App() {
  const[todo,setTodo]=useState("");
  const[todos,setTodos]=useState([{id:1,todo:"Learn React"}]);
  const [editId,setEditId]=useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId){
      const index=todos.findIndex(item=>item.id===editId);
      const newTodos=[...todos];
      newTodos.splice(index,1,{id:editId,todo});
      
      setTodos(newTodos);
      setEditId(0);
      setTodo('');
      return;
    }
    if(todo!==''){
    setTodos([...todos,{id:`${todo}-${Date.now()}`,todo}]);
    }
    setTodo('');
  }
  const handleTodo=(e)=>{
      setTodo(e.target.value);
  }
  const handleDelete=(id)=>{
    const delTodo=todos.filter(item=>item.id !== id);
    setTodos(delTodo);
  }
  const handleEdit=(id)=>{
   const editTodo=todos.find(item=>item.id ===id);
   setTodo(editTodo.todo);
   setEditId(id);
  }
  return (
    <div className="App">
        <div className='container'>
          <h1>Advanced Todo List App</h1>
          <form className='formtodo' onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleTodo}/>
            <button type="submit">{editId?"Edit":"Go"}</button>
          </form>
          <ul className='listAll'>
          {todos.map((t)=>(
            <li className='todo'>
            <span className='todoName' key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)}>Edit</button>
            <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
          ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
