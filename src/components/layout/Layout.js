import classes from "./Layout.module.css";

import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <div>
      <MainNavigation inCard={props.inCard} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
