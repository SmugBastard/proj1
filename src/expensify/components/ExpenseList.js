import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import queryExpenses from "../selectors/expense";


const ExpenseList = (props_) => (
    <div>
        <h2>Expense List</h2>
        {props_.expenses.map((item_) => <ExpenseListItem {...item_} />)}
    </div>
);

const mapStateToProps = (state_) => {
    return {
        expenses: queryExpenses(state_.expenses, state_.filter)
    };
};

export default connect(mapStateToProps)(ExpenseList);
