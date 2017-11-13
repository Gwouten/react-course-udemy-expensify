import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => (
  <div>
    <h3>Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal/100).format('$0,0.00')}</h3>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return ({
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)
  })
};

export default connect(mapStateToProps)(ExpensesSummary);
