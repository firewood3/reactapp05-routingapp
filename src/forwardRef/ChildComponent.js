import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const [rowId, setRowId] = useState({});

  useEffect(()=> {
    setRowId({id:5});
  }, []);

  useImperativeHandle(ref, ()=> ({
    getId: () => rowId,
    getAlert() {
      alert('getAlert from Child');
    }
  }));

  return (
    <div>
      Hi~~
    </div>
  );
});

export default ChildComponent;
