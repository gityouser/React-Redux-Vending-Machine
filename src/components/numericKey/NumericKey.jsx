import React from 'react';

function NumericKey({
  keyValue,
  keyAction,
  keyClassName,
}) {
  return <div 
    className={`numeric-key ${keyClassName}`}
    onClick={keyAction}
  >
    <p>{keyValue}</p>
  </div>
}

export default NumericKey;