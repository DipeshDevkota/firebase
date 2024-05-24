import Navbar from './components/Navbar'
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from"react-icons/ai";
import {collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect,useState } from 'react';
import {db } from "./config/firebase";
import useDisclouse from './hooks/useDisclouse';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
const App = () => {

  const [contacts, setContacts] = useState([]);
  const {isopen,onClose,onOpen} = useDisclouse();

useEffect(() => {
  const getContacts =async ()=>
  {
    
    try {
      const contactRef=collection(db,"contacts");


 
  onSnapshot( contactRef,(snapshot) =>{
       const contactLists = snapshot.docs.map((doc)=> {
    return {
     id: doc.id,
     ...doc.data(),


  };
  });

  setContacts(contactLists);
  return contactLists;


});




  
    } catch (error) {
      console.log(error);
    }
  };

    getContacts();

  

 

 
  
}, []);

 
  return (
    <>
    <div className='mx-auto max-w-[370px]'>
      <Navbar/>
      <div className='flex gap-2'>
      <div className=' relative flex flex-grow items-center'>
        <FiSearch className='absolute ml-1 text-3xl text-white'/>
          <input 
          type="text"
          className='h-10 flex-grow rounded-md border border-white
          bg-transparent pl-9 text-white'
          />
      </div>
   
        <AiFillPlusCircle
        onClick={onOpen} className='cursor-pointer text-5xl text-white '/ >
      </div>
       <div>

       { contacts.map((contact)=>
       (

     <ContactCard key={contact.id} contact={contact}/>
        
        ))}
           
      </div>
      </div>
      <AddAndUpdateContact
      onClose={onClose}
      onOpen={isopen}
      />
  </>
  );
};

export default App;
