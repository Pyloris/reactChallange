import ContactIcon from '../assets/contact.icon.svg'
import EditIcon from '../assets/edit.icon.svg'
import DeleteIcon from '../assets/delete.icon.svg'

import { remove } from '../app/slices/contactSlice'
import { toggle } from '../app/slices/modalSlice'

import db from '../firebase';
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from 'react-redux'


function Contact(props: any) {
  const dispatch = useDispatch();

  async function deleteContact(id: string) {
    const docid = doc(db, "contacts", id);
    try {
      dispatch(remove(id));
      await deleteDoc(docid);
    }
    catch(err) {
      console.log("COULD NOT DELTE");
    }
  }

  return (
    <div className="px-4 py-3 rounded-2xl bg-card flex gap-3 justify-between items-center">
        <img className="w-[45px]" src={ContactIcon} alt="" />
        <div>
            <div className="text-start text-[16px] font-bold">{props.name}</div>
            <p className="text-[14px]">{props.email}</p>
        </div>
        <div className="flex gap-5">
            <button onClick={() => dispatch(toggle({id: props.id, name: props.name, email: props.email}))}><img src={EditIcon} alt="" /></button>
            <button onClick={() => deleteContact(props.id)}><img src={DeleteIcon} alt="" /></button>
        </div>
    </div>
  )
}

export default Contact