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
  let fullDateString;
  let button;
  if (props.showButton) {
    button = (
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={() => props.addToCard(props.event)}
        disabled={!props.showButton}
      >
        <AddShoppingCartIcon />
      </IconButton>
    );
  } else {
    button = null;
  }
  function formatStartTime() {
    const dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let startTime;
    let endTime;
    if (props.event.startTime === undefined) {
      startTime = new Date(props.event.date);
    } else {
      startTime = new Date(props.event.date);

      endTime = new Date(props.event.endTime);
    }

    if (props.event.endTime === undefined) {
      fullDateString =
        "| At: " + startTime.toLocaleDateString("de-DE", dateOptions);
    } else {
      fullDateString =
        "| Starts: " +
        startTime.toLocaleDateString("de-DE", dateOptions) +
        "\n" +
        "| Ends:" +
        endTime.toLocaleDateString("de-DE", dateOptions);
    }
  }
  formatStartTime();
  return (
    <div>
      <Card className={classes.cardSize}>
        <CardHeader title={props.event.title} className={classes.title}>
          {props.event.title}
        </CardHeader>
        <CardMedia
          className={classes.image}
          component="img"
          image={props.event.flyerFront}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <LocationOnIcon></LocationOnIcon> {props.event.venue.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={classes.makeNewLine}
          >
            {fullDateString}
          </Typography>
        </CardContent>
        <div className={classes.icon}>{button}</div>
      </Card>
    </div>
  );
}
export default Event;
