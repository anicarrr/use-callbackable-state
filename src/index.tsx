import { useState, useRef, useEffect } from 'react';

function useCallbackableState(initialState: any) {
  const [state, setState] = useState(initialState);
  
  // @ts-ignore
  let cbRef = useRef(() => {});

  useEffect(() => {
    // @ts-ignore
    cbRef.current && cbRef.current(state);
  }, [state, cbRef]);

  return [
    state,
    (arg: any, cb: any) => {
      cbRef.current = cb;
      setState.call(null, arg);
    }
  ];
}

export { useCallbackableState };
