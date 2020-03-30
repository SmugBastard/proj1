export default (props_) => {
    console.log(JSON.stringify(props_));
    console.log(props_);
    return (
        <div className="view_width">EditExpensePage...{props_.match.params.id}</div>
    );
};
