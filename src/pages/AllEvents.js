import EventList from "../components/EventList";
function AllEventsPage(props) {
  const showButton = true;
  return (
    <section>
      <h1>Alle Events</h1>
      {Object.keys(props.events)
        .sort()
        .map((date) => (
          <EventList
            key={date}
            date={date}
            addToCard={props.addToCard}
            events={props.events[date]}
            showButton={showButton}
          ></EventList>
        ))}
    </section>
  );
}

export default AllEventsPage;
