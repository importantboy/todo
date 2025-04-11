// import { compile } from 'tailwindcss';
import { useState } from 'react';
import Modal from './Modal';
import {deleteToDo , setComplete} from './store/slice';
import { useDispatch } from 'react-redux';
const List = ({item}) => {
     
    const [complete , setComp] = useState(true)
    const dispatch = useDispatch();
     const sendId = (x) => {
        dispatch(deleteToDo(x))
     }
      const setCompleted = (itemid , comp) => {
        setComp(prev => !prev)
        dispatch(setComplete({id : itemid , flag : comp}));
     }
     
  return (
    <>
        <div className='todo-list-item inline-flex'>
          <div className='flex gap-5 items-center list-none py-2 px-3 capitalize font-bold cs-shadow'>
            <input type="checkbox" className="checkbox checkbox-primary"  defaultChecked={item.isCompleted} onClick={() => setCompleted(item.id , complete)}/>
            <p className={item.isCompleted && `line-through`}>{item.name}</p>
            <button className="btn btn-soft btn-info" onClick={()=>document.getElementById('my_modal_5').showModal()}>edit</button>
            <button className="btn btn-soft btn-error" onClick={() => sendId(item.id)}>delete</button>
          </div>
        </div>
         <Modal  todoId={item.id}/>
    </>
  )
}

export default List;