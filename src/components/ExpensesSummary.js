import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    <p>Viewing {props.expenseCount} {props.expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(props.expensesTotal/100).format('$0,0.00')}</p>
  </div>
);

const mapStateToProps = (state, props) => ({
  expenseCount: state.expenses.length,
  expensesTotal: expensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);
