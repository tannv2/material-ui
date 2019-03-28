import React from "react";
import { Grid, Paper } from "material-ui";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => (
  <Grid container>
    <Grid item sm />
    <Grid item sm>
      <Paper style={styles.Paper}>Right Panel</Paper>
    </Grid>
  </Grid>
);
