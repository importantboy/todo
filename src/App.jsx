import React, { useState } from 'react'
import List from './List'
import { useSelector , useDispatch} from 'react-redux';
import { addTodo } from './store/slice';
const App = () => {
  const statearea = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [data, setdata] = useState('')
  const senddata = () => {
     dispatch(addTodo({name : data , isCompleted : false }))
     setdata('');
  }
  return (
    <div data-theme="abyss" className='w-screen h-screen flex justify-center relative z-1 '>
      <div className='bg-overlay absolute w-full h-full -z-2 background opacity-3'> </div>

      <div className='todo-container px-4 w-screen md:w-1/2 mt-[20%] flex flex-col items-center'>
        <h1 className='uppercase text-4xl tracking-widest font-bold py-3'>todo list</h1>

        <div className='input-control  flex flex-col md:flex-row gap-2 justify-center w-full '>
          <input type="text" placeholder="Add todo" className="input input-primary w-full md:w-auto" value={data} onChange={(e) => setdata(e.target.value)}/>
          <button className="btn btn-outline btn-primary" onClick={senddata}>Add items</button>
        </div>

        <p className='py-4 font-bold uppercase tracking-widest'>todo items</p>
        {statearea.map((item) => {
          return  <List key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}
export default App;