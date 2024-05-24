import Modal from './Modal'
import { db } from '../config/firebase';
import { addDoc,doc, updateDoc } from 'firebase/firestore';
import {Form,Formik ,Field}  from "formik";
const AddAndUpdateContact = ({onOpen,onClose,isUpdate,contact}) => {

       
    const addcontact =async (contact,id)=>
    {
        try{
            const contactRef=doc(db,"contacts",id);
            await addDoc(contactRef,contact);
            onClose();
            toast.success("Contact Added Successfully");
        }
        catch(error)
        {
            console.log(error);
        }
    };
    const updatecontact =async (contact,id)=>
    {
        try{
            const contactRef=doc(db,"contacts",id);
            await updateDoc(contactRef,contact);
            onClose();
            toast.success("Contact Added Successfully");
        }
        catch(error)
        {
            console.log(error);
        }
    };

  










  return (
    <div>
      <Modal isopen={onOpen} 
      onClose={onClose}>
        
 <Formik
  initialValues={isUpdate?
    {
        name:contact.name,
        email:contact.email,
    }:
    {
        name:"",
        email:"",
    }}
    onSubmit={(values)=>
        {
            console.log(values)
           isUpdate? updatecontact(values,contact.id):
         addcontact(values);
        }

}
  

 >
    <Form className='flex flex-col'>
        <div className='flex flex-col gap-1 '>
               <label htmlFor="name" >Name</label>
               <Field  name="name " className="border h-10" />
        </div>
        <div className='flex flex-col gap-1 '>
               <label htmlFor="email" >Email</label>
               <Field   name="email" className="border h-10" />
        </div>
                

                <button className=' self-end mt-2 cursor-pointer bg-slate-700 px-3 py-1.5 border'>
                {isUpdate?"Update":"Add"} Contact
                </button>
             </Form>  
        </Formik>
        
    </Modal>
      
    </div>
  );
};



export default AddAndUpdateContact
