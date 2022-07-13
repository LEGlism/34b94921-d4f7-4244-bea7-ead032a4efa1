import Event from "./Event";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function EventList(props) {
  return (
    <div>
      <h2>{props.date}</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {props.events.map((event) => (
            <Grid key={event._id} item xs={3} md={4}>
              <Event
                event={event}
                addToCard={props.addToCard}
                showButton={props.showButton}
              ></Event>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
export default EventList;
