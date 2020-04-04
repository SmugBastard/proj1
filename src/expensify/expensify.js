import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExp, removeExp, editExp } from "./actions/expense";
import { updateFilter, defaultFilter } from "./actions/filter";
import { queryExpenses } from "./selectors/expense";
import "normalize.css/normalize.css";
import "./css/styles.scss";

const store = configureStore();

const expSubscr = store.subscribe(() => {
    const { expenses, filter } = store.getState();
    console.log("EVENT", queryExpenses(expenses, filter));
});

const waterBill = store.dispatch(addExp({ title: "aWater Bill", descr: "my waterbill details", amount: 6500, createDt: 43 }));
const gasBill = store.dispatch(addExp({ title: "bGas Bill", descr: "my gasbill details", amount: 4893, createDt: 210 }));

store.dispatch(updateFilter({ sortBy: "amount", startDt: 0, endDt: 300 }));
store.dispatch(updateFilter({ sortBy: "date" }));
store.dispatch(updateFilter({ text: "bilL" }));
store.dispatch(updateFilter({ text: "gas", sortBy: "amount" }));

const paint = () => ReactDOM.render(<AppRouter />, document.getElementById("app1"));
paint();

