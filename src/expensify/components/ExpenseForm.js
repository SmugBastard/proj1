import { ReactReduxContext } from "react-redux/lib/components/Context";
import { render } from "react-dom/cjs/react-dom.production.min";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";


const regxAmount = /^\d{1,}(\.\d{0,2})?$/;

export default class ExpenseForm extends React.Component {
    constructor(props_) {
        super(props_);
        this.state = {
            id: props_.expense ? props_.expense.id : "",
            title: props_.expense ? props_.expense.title : "",
            descr: props_.expense ? props_.expense.descr : "",
            amount: props_.expense ? (props_.expense.amount / 100).toString() : "",
            createDt: props_.expense ? props_.expense.createDt : Date.now(),

            dateHasFocus: false,
            error: undefined
        };
    }

    onTitleChange = (e_) => {
        const title = e_.target.value;
        this.setState(() => ({ title }));
    }

    onDescrChange = (e_) => {
        const descr = e_.target.value;
        this.setState(() => ({ descr }));
    }
    onAmountChange = (e_) => {
        const amount = e_.target.value;
        if (!amount || amount.match(regxAmount)) {
            this.setState(() => ({ amount: amount }));
        }
    }

    onDateChange = (createDt_) => {
        // console.log(createDt_);
        if (createDt_) {
            const createDt = createDt_;
            this.setState(() => ({ createDt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ dateHasFocus: focused }));
    }

    handleOnSubmit = (e_) => {
        e_.preventDefault();

        if (this.state.title && this.state.amount) {
            // console.log("handleOnSubmit: SUCCESS");
            // Clear the error message
            this.setState(() => ({ error: false }));

            // Call parent function to submit expense
            this.props.onSubmit({
                title: this.state.title,
                amount: parseFloat(this.state.amount * 100),
                createDt: this.state.createDt,
                descr: this.state.descr
            });

        }
        else {
            // console.log("handleOnSubmit: ERROR");
            // Set error state equal to "Please provide title and amount"
            this.setState(() => ({ error: true }));
        }
    }

    render() {
        return (
            <div>
                {this.state.error && (<p>Enter a valid title and amount to continue...</p>)}
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        autoFocus
                        onChange={this.onTitleChange}
                        value={this.state.title}
                    />
                    <input
                        name="amount"
                        type="text"
                        placeholder="Amount"
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />

                    <SingleDatePicker
                        date={this.state.createDt}
                        onDateChange={this.onDateChange}
                        focused={this.state.dateHasFocus}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />

                    <textarea
                        name="descr"
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onDescrChange}
                        value={this.state.descr}
                    >
                    </textarea>
                    <button>{this.state.id ? "Save Expense" : "Add Expense"}</button>
                </form>
            </div>
        );
    };
}
