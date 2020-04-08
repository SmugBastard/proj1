import moment from "moment";


const defaultFilter = {
    text: "",
    amount: 0,
    sortBy: "title", // date or amount or title
    startDt: moment().startOf("month"),
    endDt: moment().endOf("month")
};

export default (state_ = defaultFilter, action_) => {
    switch (action_.type) {
        case "UPDATE_FILTER":
            return { ...state_, ...action_.filterUpdates };
    }

    return state_;
};
