import Nav from '../components/Nav'
import Nocontact from '../components/Nocontact'
import Contact from '../components/Contact'
import Modal from '../components/Modal'

import { useEffect } from 'react'

import db from '../firebase'
import {collection, getDocs } from 'firebase/firestore'

import { insert } from '../app/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'


function Main() {
    const dispatch = useDispatch();
    let contacts = useSelector((state) => state.contacts.contacts);

    let i = 0;

    useEffect(() => {
        getDocs(collection(db, "contacts")).then((querySnapshot) => {
            let newDocs = querySnapshot.docs.map((doc) => {return {id: doc.id, ...doc.data()}})
            dispatch(insert(newDocs))
        })
    }, []);

    return (
        <div  className="w-full h-screen bg-gray">
            <center className="relative  w-[393px] h-full mx-auto pt-4">
                <Nav />
                <div className="mt-4 h-[85%] flex flex-col gap-3 overflow-scroll no-scrollbar">
                <Modal />
                {
                    contacts.length == 0 ? <Nocontact /> :
                    contacts.map((contact: any) => {
                        return <Contact key={i++} name={contact.name} email={contact.email} id={contact.id} />
                    })
                }
                </div>
            </center>
        </div>
    )
}

export default Main