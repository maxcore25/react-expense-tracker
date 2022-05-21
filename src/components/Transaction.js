import React from 'react';

export default function Transaction() {
  return (
    <li className='minus'>
      Cash <span>-$400</span>
      <button className='delete-btn'>x</button>
    </li>
  );
}
