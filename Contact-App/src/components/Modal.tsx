import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"
import { insert, remove } from '../app/slices/contactSlice'
import { hide } from '../app/slices/modalSlice'

import db from '../firebase';
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

function Modal() {

  const [contact, setContact] = useState({name: "", email: ""});

  const contactBound = useSelector((state) => state.modal.bound)

  const modalState = useSelector((state) => state.modal.hide);

  const dispatch = useDispatch();

  if (!modalState) {
    document.querySelector("#modal")?.classList.add("hidden");
  } else {
    document.querySelector("#modal")?.classList.remove("hidden");

  }

  useEffect(() => {
    document.querySelectorAll("input").forEach(input => input.value = '');
  }, [contactBound]);

  async function updateContact() {
    if (contactBound.id != "" && contactBound.name != "" && contactBound.email != "" && contact.name != "" && contact.email != "") {
      const toUpdate = doc(db, "contacts", contactBound.id);

      try {
        updateDoc(toUpdate, contact);
        dispatch(hide());
        dispatch(remove(contactBound.id))
        dispatch(insert([{id: contactBound.id, ...contact}]))
      }
      catch(err) {
        console.log("could not update");
      }
    }
    else if (contactBound.id == "" && contactBound.name == "" && contactBound.email == "" && contact.name != "" && contact.email != "") {
      const newDocRef = await addDoc(collection(db, "contacts"), contact);
      dispatch(hide());
      const newDoc = await getDoc(newDocRef);
      dispatch(insert([{id: newDoc.id, ...newDoc.data()}]))
    }

  }


  return (
    <div id="modal" className="absolute top-[30%] left-[7%] bg-white w-[348px] h-[244px] p-7 flex flex-col gap-4 rounded-2xl hidden z-10">
        <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="name">Name</label>
            <input className="appearance-none border border-1 border-black py-1" type="text" id="name" name="name" placeholder={contactBound.name} onInput={(event) => setContact({ name: event.target.value, email: contact.email})}/>
        </div>

        <div className="flex flex-col gap-2">
            <label className="text-start" htmlFor="email">Email</label>
            <input className="appearance-none border border-1 border-black py-1" type="email" name="email" id="email" placeholder={contactBound.email} onInput={(event) => setContact({ email: event.target.value, name: contact.name })} />
        </div>

        <div className="w-full flex justify-end">
            <button onClick={updateContact}  className="rounded-lg bg-yellow-500 px-4 py-2 border border-1 border-black">Add Contact</button>
        </div>
    </div>
  )
}

export default Modal