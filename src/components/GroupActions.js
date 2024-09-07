import React from 'react';

function GroupActions({ onDeleteSelected }) {
  return (
    <div className="group-actions">
      <button onClick={onDeleteSelected}>حذف گروهی</button>
    </div>
  );
}

export default GroupActions;
