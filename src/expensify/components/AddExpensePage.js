import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExp as addExpense } from "../actions/expense";


const AddExpensePage = (props_) => (
    <div className="view_width">
        <h2>AddExpensePage...</h2>
        <ExpenseForm
            onSubmit={(expense) => {
                // console.log(`AddExpenseForm.onSubmit...: ${JSON.stringify(expense)}`)
                // console.log(`jello: ${props_.foo}`);
                if (props_.dispatch(addExpense(expense))) {
                    props_.history.push("/");
                }
            }} />
    </div>
);

const mapStateToProps = (state_) => ({
    expenses: state_.expenses
});

export default connect(mapStateToProps)(AddExpensePage);
