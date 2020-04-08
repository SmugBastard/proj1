import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExp, removeExp, editExp } from "./actions/expense";
import { updateFilter, defaultFilter } from "./actions/filter";
import queryExpenses from "./selectors/expense";
import "normalize.css/normalize.css";
import "./css/styles.scss";
import moment from "moment";

const store = configureStore();

store.subscribe(() => {
    const { expenses, filter } = store.getState();
    // console.log("EVENT", queryExpenses(expenses, filter));
});

const waterBill = store.dispatch(addExp({ title: "aWater Bill", descr: "my waterbill details", amount: 6500, createDt: moment("2019-12-25") }));
const phoneBill = store.dispatch(addExp({ title: "pPhone", descr: "my phone bill details", amount: 1500, createDt: moment("2020-10-15") }));
const rentBill = store.dispatch(addExp({ title: "cRent", descr: "my rent details", amount: 109500, createDt: moment("2020-03-15") }));
const gasBill = store.dispatch(addExp({ title: "bGas Bill", descr: "my gasbill details", amount: 4893, createDt: moment("2020-04-03") }));

// store.dispatch(updateFilter({ sortBy: "amount", startDt: 0, endDt: 300 }));
// store.dispatch(updateFilter({ sortBy: "date" }));
// store.dispatch(updateFilter({ text: "bilL" }));


// setTimeout(() => {
//     store.dispatch(updateFilter({ text: "gas", sortBy: "amount" }));
// }, 3000)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const paint = () => ReactDOM.render(jsx, document.getElementById("app1"));
paint();

