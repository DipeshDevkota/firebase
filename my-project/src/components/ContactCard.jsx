import { HiOutlineUserCircle } from "react-icons/hi"
import { IoMdTrash } from "react-icons/io"
import { RiEditCircleLine } from "react-icons/ri"
import {db} from "../config/firebase";
import { deleteDoc,doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
const ContactCard = ({contact}) => {
   const {isopen,onClose,onOpen} = useDisclouse();




   const deleteContact =async ()=>
   {
    try{
       await deleteDoc(doc(db,"contacts",contact.id));
    }
    catch(error){
 console.log(error)
    }
   }




  return (
   <>
    <div
       key={contact.id}  className='flex items-center justify-around bg-yellow p-2 rounded-lg mt-2  ' >
          <div className='flex gap-2'>
          <HiOutlineUserCircle className=' text-4xl bg-yellow'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email} </p>
          </div>
          </div>

        <div className='flex gap-2'> 
           
            <RiEditCircleLine onClick={onOpen} className='text-3xl cursor-pointer'/>
              {console.log(onOpen)}
            <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-3xl cursor-pointer'/>
        </div>
        
    </div>
<AddAndUpdateContact contact={contact} isUpdate isopen={isopen} onClose ={onClose} />
    </>
  )
}

export default ContactCard
