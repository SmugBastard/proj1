import moment from "moment";


const queryExpenses = (expenses_, { text, sortBy, startDt, endDt }) => {
    return expenses_.filter((expense) => {
        const matchStart = (typeof (startDt) !== "object" || startDt === null) || expense.createDt.isSameOrAfter(startDt);
        const matchEnd = (typeof (endDt) !== "object" || endDt === null) || expense.createDt.isSameOrBefore(endDt);
        const matchText = typeof (text) !== "string" || (expense.title.toLowerCase().search(text.toLowerCase()) >= 0 || expense.descr.toLowerCase().search(text.toLowerCase()) >= 0);

        return matchText && matchStart && matchEnd;
    })
        .sort((a, b) => {
            switch (sortBy) {
                case "amount":
                    return a.amount > b.amount ? -1 : 1;
                case "date":
                    return a.createDt > b.createDt ? -1 : 1;
                case "title": {
                    return a.title < b.title ? -1 : 1;
                }
            }
        });
};
export default queryExpenses;
