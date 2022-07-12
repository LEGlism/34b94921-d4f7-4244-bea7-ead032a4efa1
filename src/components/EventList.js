import Event from "./Event";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function EventList() {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {list.map((z) => (
            <Grid item xs={1} md={3}>
              <Event zahl={z}></Event>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
export default EventList;
