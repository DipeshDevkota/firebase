import { useState } from 'react'
const useDisclouse = () => {
     
const [isopen, setIsopen] = useState(false);

const onOpen =() =>
{
  setIsopen(true);
}

const  onClose =()=>
{
  setIsopen(false);
}

  return (
    {onClose,onOpen,isopen}
  )
};

export default useDisclouse
