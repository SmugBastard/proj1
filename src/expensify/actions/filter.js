
export const updateFilter = (filterUpdates) => ({
    type: "UPDATE_FILTER",
    filterUpdates
});

export const defaultFilter = {
    text: "",
    amount: 0,
    sortBy: "date", // date or amount
    startDt: undefined,
    endDt: undefined
};
