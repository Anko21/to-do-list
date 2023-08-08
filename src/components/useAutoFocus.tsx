import React, { useRef,useEffect } from 'react'

// created a hook to apply autofocus

const useAutoFocus = (): React.RefObject<HTMLInputElement> => {
  const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return inputRef;
  };

  export default useAutoFocus;