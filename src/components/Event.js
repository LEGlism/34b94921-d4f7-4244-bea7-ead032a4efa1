function Event(props) {
  return (
    <div>
      <h1>hallo {props.zahl}</h1>
      <button onClick={() => props.addToCard()}>+</button>
    </div>
  );
}
export default Event;
