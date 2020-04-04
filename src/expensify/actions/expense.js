import { v1 as uuid } from "uuid";

export const addExp = (
    {
        title = "",
        descr = "",
        amount = 0,
        createDt = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    exp: {
        id: uuid(), title, descr, amount, createDt
    }
});

export const removeExp = ({ id = "0" } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const editExp = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
