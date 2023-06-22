import React, { useRef,useEffect } from 'react'

// create a hook to apply autofocus

const useAutoFocus = () => {
    const inputRef = useRef(null);
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  
    return inputRef;
  };
  
  export default useAutoFocus;

//https://blog.logrocket.com/how-to-autofocus-using-react-hooks/


// or

// import { useCallback } from "react";

// const useAutoFocus = () => {
//   const inputRef = useCallback((inputElement) => {
//     if (inputElement) {
//       inputElement.focus();
//     }
//   }, []);

//   return inputRef;
// };

// export default useAutoFocus;

//or You can use the autoFocus prop.