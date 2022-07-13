import EventList from "../components/EventList";
function AllEventsPage(props) {
  return (
    <section>
      <h1>Alle Events</h1>
      <EventList addToCard={props.addToCard} events={props.events}></EventList>
    </section>
  );
}

export default AllEventsPage;
