import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";


const handleExpenseClick = (e_) => {
    console.log(e_.target);
    // alert(e_.target);
};

const ExpenseListItem = ({ id, title, descr, amount, createDt }) => (<div>
    <div onClick={handleExpenseClick}>
        <Link to={`/edit/${id}`}>{`${title}`}</Link>{` - ${descr} - ${amount / 100} - ${createDt.format("MMM Do YYYY, h:mmA")}`}
    </div>
</div >
);

export default connect()(ExpenseListItem);