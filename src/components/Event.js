import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import classes from "../styles/Event.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";

function Event(props) {
  return (
    <div>
      <Card className={classes.cardSize}>
        <CardHeader
          title={props.event.title}
          className={classes.title}
        ></CardHeader>
        <CardMedia
          component="img"
          height="300px"
          image={props.event.flyerFront}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <LocationOnIcon></LocationOnIcon> {props.event.venue.name}
          </Typography>
          //TODO: datum Formatieren
          <Typography gutterBottom variant="h6" component="div">
            | Starts: {props.event.startTime}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            | Ends: {props.event.endTime}
          </Typography>
        </CardContent>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => props.addToCard(props.event)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </Card>
    </div>
  );
}
export default Event;
