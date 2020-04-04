const defaultFilter = {
    text: "",
    amount: 0,
    sortBy: "date", // date or amount
    startDt: undefined,
    endDt: undefined
};

export default (state_ = defaultFilter, action_) => {
    // console.log(`filterReducer call...action: ${action_}`);
    switch (action_.type) {
        case "UPDATE_FILTER":
            return { ...state_, ...action_.filterUpdates };
    }

    return state_;
};
