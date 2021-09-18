import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(user, score){
    return { user, score };
}

const rows = [
    createData('Abhir12', 45),
    createData('Harry13', 45),
    createData('Ann15', 45),
    createData('Aryan16', 45),

];

export default function Homepage() {
    const classes = useStyles();
    return(
        <div>
        <div>The Leaderboards Amongst you and your friends:</div>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
          {rows.map((row) => (
            <TableRow key={row.user}>
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
        </div>
    )
}