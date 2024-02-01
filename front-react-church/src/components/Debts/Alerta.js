import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const MyToastComponent = () => {
    const [showToast, setShowToast] = useState(true);

    const handleClose = () => setShowToast(false);

  return (
    <Toast show={showToast} onClose={handleClose}>
      <Toast.Body className="d-flex justify-content-between align-items-center toast text-bg-primary border-0 hh" style={{ backgroundColor: '#b8e4f3', color: '#103fca', border: '1px solid #103fca' , maxWidth: '100%'}}>
        <div className='toast-body'><h6>Haz clic sobre el cliente que te debe para registrar abonos.</h6></div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={handleClose} aria-label="Close"></button>
      </Toast.Body>
    </Toast>
    
  );
}

export default MyToastComponent;
<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>