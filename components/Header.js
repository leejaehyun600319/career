import Link from 'next/link';

import { Toolbar, Grid } from '@material-ui/core';

const Header = () => (
  <div>
    <Toolbar>
      <Grid container direction="row" justify="space-around">
        <Grid item xs={12}>
          <Link href="/">
            <a style={{ margin: '0px 20px 0px auto' }}>Ohoo</a>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
);

export default Header;
