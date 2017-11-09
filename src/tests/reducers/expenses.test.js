import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set addExpense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '123abc',
      description: 'description',
      note: 'note',
      amount: 150,
      createdAt: moment(0)
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expenseId: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove any if no id provided', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    expenseId: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set up editExpense with valid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'a new note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('a new note');
});

test('should set up editExpense with empty id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'a new note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
