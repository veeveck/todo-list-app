import './App.css';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <h1>Advanced Todo List App</h1>
          <form className='formtodo'>
            <input type="text"/>
            <button>Go</button>
          </form>
          <ul className='listAll'>
            <li className='todo'>
            <span className='todoName'>Redux</span>
            <button>Edit</button>
            <button>Delete</button>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
