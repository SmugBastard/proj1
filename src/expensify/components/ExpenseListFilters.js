import { connect } from "react-redux";
import { updateFilter } from "../actions/filter";
import { DateRangePicker } from "react-dates";


class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    handleTextChange = (e_) => {
        this.props.dispatch(updateFilter({ text: e_.target.value }));
    }

    handleSortByChange = (e_) => {
        this.props.dispatch(updateFilter({ sortBy: e_.target.value }));
    }

    onDatesChange = ({ startDate: startDt, endDate: endDt }) => {
        this.props.dispatch(updateFilter({ startDt, endDt }));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                Keyword:<input type="text" onChange={this.handleTextChange} value={this.props.filter.text} />

                <select value={this.props.filter.sortBy} onChange={this.handleSortByChange}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filter.startDt} // momentPropTypes.momentObj or null,
                    startDateId="filterStartDt" // PropTypes.string.isRequired,
                    endDate={this.props.filter.endDt} // momentPropTypes.momentObj or null,
                    endDateId="filterEndDt" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state_) => {
    return {
        filter: state_.filter
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);