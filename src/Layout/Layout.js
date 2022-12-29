import {MainNav} from './main-nav';
import classes from './Layout.module.css';

function Layout(data) {
  return (
    <div className={classes.div}>
      <MainNav />
      <div>
      <main className={classes.main}>{data.children}</main>
      </div>
    </div>
  );
}

export default Layout;