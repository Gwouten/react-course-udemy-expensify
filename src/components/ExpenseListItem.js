import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'be', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'ste' : 'de';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('be');

const ExpenseListItem = ({ id, description, amount, createdAt}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount/100).format('$0,0.00')}
         -
         {moment(createdAt).format('DD MMM YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;
