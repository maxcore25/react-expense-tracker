import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{999}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{999}</p>
      </div>
    </div>
  );
}
