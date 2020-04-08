import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExp as editExpense, removeExp as removeExpense } from "../actions/expense"


const EditExpensePage = (props_) => (
    <div className="view_width">
        <h2>Edit Expense...</h2>
        <ExpenseForm
            expense={props_.expense}
            onSubmit={(expense) => {
                // console.log(`AddExpenseForm.onSubmit...: ${JSON.stringify(expense)}`)
                // console.log(`jello: ${props_.foo}`);
                if (props_.dispatch(editExpense(props_.match.params.id, expense))) {
                    props_.history.push("/");
                }
            }} />
        <button onClick={(e_) => {
            props_.dispatch(removeExpense({ id: props_.match.params.id }));
            props_.history.push("/");
        }}>Remove</button>

    </div>
);


const mapStateToProps = (state_, props_) => ({
    expense: state_.expenses.find((exp) => exp.id === props_.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
