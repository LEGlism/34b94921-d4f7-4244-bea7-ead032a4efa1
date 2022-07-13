import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import classes from "../styles/Event.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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

        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => props.addToCart(props.event)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </Card>

      <button>+</button>
    </div>
  );
}
export default Event;
