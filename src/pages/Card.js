import EventList from "../components/EventList";
function CardPage(props) {
  const showButton = false;
  return (
    <section>
      <h1>Warenkorb</h1>
      <EventList events={props.events} showButton={showButton}></EventList>
    </section>
  );
}

export default CardPage;
