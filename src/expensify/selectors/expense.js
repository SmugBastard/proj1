export const queryExpenses = (expenses_, { text, sortBy, startDt, endDt }) => {
    return expenses_.filter((expense) => {
        const matchStart = typeof (startDt) !== "number" || expense.createDt >= startDt;
        const matchEnd = typeof (endDt) !== "number" || expense.createDt <= endDt;
        const matchText = typeof (text) !== "string" || (expense.title.toLowerCase().search(text.toLowerCase()) >= 0 || expense.descr.toLowerCase().search(text.toLowerCase()) >= 0);

        // console.log(`\ttext: ${text}`);
        // console.log(`\t${matchText} && ${matchStart} && ${matchEnd}`);
        return matchText && matchStart && matchEnd;
    })
        // .sort(function (a, b) {
        //     return (sortBy === "amount")
        //         ? (a > b ? -1 : 1)
        //         : (a > b ? 1 : -1);
        // });
        .sort((a, b) =>
            sortBy === "amount"
                ? a > b ? -1 : 1
                : a > b ? 1 : -1);
};
