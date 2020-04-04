const defaultExpense = [
];

export default (state_ = defaultExpense, action_) => {
    // console.log(`expenseReducer call...action: ${JSON.stringify(action_)}`);
    switch (action_.type) {
        case "ADD_EXPENSE":
            return [...state_, action_.exp];
        case "REMOVE_EXPENSE":
            return state_.filter(({ id }) => id !== action_.id);
        case "EDIT_EXPENSE":
            return state_.map((expense) => {
                if (expense.id === action_.id) {
                    return { ...expense, ...action_.updates };
                }
                else {
                    return expense;
                }
            });
    }

    return state_;
};
