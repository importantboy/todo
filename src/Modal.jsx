import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {updateTodo} from './store/slice'
const Modal = ({item , modalId}) => {
  const dispatch = useDispatch();
  const [field , setfield] = useState('');

    useEffect(() => {
       setfield(item.name)
    },[item]);

  const updateData = (x) => {
      if(!field.trim()){
        alert("field should not be empty")
        return;
      }
      dispatch(updateTodo({id : x.id , data : field}))
      setfield('')
  }
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={}>open modal</button> */}
<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg uppercase">edit your todo</h3>
    <input type="text" placeholder="your work here !" className="input input-info my-2" value={field} onChange={(e) => setfield(e.target.value)}/>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
       <button className="btn btn-info mx-2" onClick={() => updateData(item)}>Update</button>
        <button className="btn btn-error">close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal;