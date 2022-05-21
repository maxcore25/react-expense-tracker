import React from 'react';

export default function AddTransaction() {
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={() => console.log()}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={'text'}
            onChange={e => console.log(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={123}
            onChange={e => console.log(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}
