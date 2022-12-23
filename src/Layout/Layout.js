import {MainNav} from './main-nav';
import classes from './Layout.module.css';

function Layout(data) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{data.children}</main>
    </div>
  );
}

export default Layout;