import Event from "./Event";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function EventList(props) {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {list.map((z) => (
            <Grid key={z} item xs={1} md={3}>
              <Event zahl={z} addToCard={props.addToCard}></Event>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
export default EventList;
