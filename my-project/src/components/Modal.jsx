import {createPortal} from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({isopen,onClose ,children}) => {
  return createPortal(
    <>
      {isopen &&
      (
        <>
           
           <div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white  p-4">
        <div className="flex justify-end ">

            <AiOutlineClose  onClick={onClose}className="text-2xl  "/>

        </div>
        
        {children}
        
         </div>
         <div  className=" absolute z-40 top-0 h-screen w-screen backdrop-blur "/>



        </>



      )}
    </>
  ,document.getElementById("modal-root")
  );
}

export default Modal;
