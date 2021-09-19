import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import {Table} from 'react-bootstrap';
import User from './UserInfo';
//import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
// function createData(user, score){
//     return { user, score };
// }


// const rows = [
//     createData('Abhir12', 45),
//     createData('Harry13', 45),
//     createData('Ann15', 45),
//     createData('Aryan16', 45),

// ];

export default function Homepage() {
    const classes = useStyles();
    const [myFriends, setMyFriends] = React.useState();

    const getFriends = async () => {
      const url = new URL('http://localhost:8080/users/get');
      let res = await fetch(url).then((resp) => resp.json());
      setMyFriends(res);
      console.log(myFriends);
    }


    useEffect( () => {
      getFriends();
    }, [])



    return(
        <div>
        <div>Here are scores amongst you and your friends:</div>
        <div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>User</th>
                <th>Location</th>
                <th>Score</th>
                </tr>
            </thead>
            {myFriends && myFriends.map(s => <User id={s.doc} info={s} />)}
        </Table>
        
        </div>
        </div>
    )
}