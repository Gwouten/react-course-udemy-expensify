import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should generate snapshot for 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={1}
    expensesTotal={235}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should generate snapshot for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={23} 
    expensesTotal={254478425}
  />);
  expect(wrapper).toMatchSnapshot();
});
