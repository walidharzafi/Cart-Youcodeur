import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ProfilUser } from './ProfilUser';

export const PrintCarts = () => {
  const componentRef = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ProfilUser ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
