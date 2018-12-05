import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(id, address, isSecure, alexaRank, trafficEstimate, bbRank) {
  id += 1;
  return { id, address, isSecure, alexaRank, trafficEstimate, bbRank };
}

const rows = [
  createData(1, 'stackchief.com', true, 100000, 20, 1),
  createData(2, 'prying.io', false, 6600000, 2, 2)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>External Link</TableCell>
            <TableCell>Secure?</TableCell>
            <TableCell numeric>Alexa Rank</TableCell>
            <TableCell numeric>Traffic Estimate</TableCell>
            <TableCell numeric>Blogbank Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Button href={row.address} color="inherit">
                    {row.address}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button target="_blank" href={'http://www.' + row.address}>
                    <Icon>launch</Icon>
                  </Button>
                </TableCell>
                <TableCell>
                  {row.isSecure ? <Icon>https</Icon> : <Icon>http</Icon>}
                </TableCell>
                <TableCell numeric>{row.alexaRank}</TableCell>
                <TableCell numeric>{row.trafficEstimate}</TableCell>
                <TableCell numeric>{row.bbRank}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
