import React from 'react';

function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="modal">
      <p>آیا از حذف این مخاطب مطمئن هستید؟</p>
      <button onClick={onConfirm}>بله</button>
      <button onClick={onCancel}>خیر</button>
    </div>
  );
}

export default DeleteConfirmationModal;
