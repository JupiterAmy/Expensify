import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenseTotal from './../selectors/expenseTotal.js';
import selectExpenses from './../selectors/expenses.js';

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
             <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}.</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
       expenseCount: visibleExpenses.length,
       expensesTotal: expenseTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary); 