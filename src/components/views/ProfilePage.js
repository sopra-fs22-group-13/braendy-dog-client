
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import 'styles/views/ProfilePage.scss';
import {Button} from 'components/ui/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BaseContainer from "components/ui/BaseContainer";
import MenuSideBar from 'components/ui/MenuSideBar';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import 'styles/views/ProfilePage.scss';
import { api } from "../../helpers/api";








/*
It is possible to add multiple components inside a single file,
however be sure not to clutter your files with an endless amount!
As a rule of thumb, use one file per component and only add small,
specific components that belong to the main one in the same file.
 */

function createData(date, wins, inGoal) {
    return { date, wins, inGoal };
}

const rows = [
    createData('10.05.2022', 1, 4),
    createData('10.05.2022', 0, 3),
    createData('10.05.2022', 1, 4),
    createData('10.05.2022', 0, 2),
    createData('10.05.2022', 0, 1),
    createData('10.05.2022', 1, 4),
    createData('10.05.2022', 0, 3),

];

function getStripedStyle (wins) {
    return { background: wins === 0 ? 'linear-gradient(90deg, rgba(231,111,109,1) 1%, rgba(247,248,241,1) 1%, rgba(247,248,241,1) 41%, rgba(225,203,192,1) 90%)' : 'linear-gradient(90deg, rgba(165,231,109,1) 1%, rgba(247,248,241,1) 1%, rgba(247,248,241,1) 41%, rgba(200,234,191,1) 90%)'};
}
const ProfilePage = props => {
    const history = useHistory();

    const doMenu = async () => {
      history.push(`/game`);
    };
    const doEdit = async () => {
        history.push(`/editprofile`);
    };
    const [avatar, setAvatar] = React.useState('');
    const [user, setUser]= React.useState('');
    const [errorFetchData,setErrorFetchData] = useState(null)



    useEffect(() => {
        // effect callbacks are synchronous to prevent race conditions. So we put the async function inside:

        async function fetchData() {

            try {
                let userId =localStorage.getItem("userID")
                const response = await api.get("/users/"+userId, {
                    headers: {
                        'Authorization': "Basic " + localStorage.getItem("token")
                    }
                });

                setUser(response.data);

                setAvatar('resources/avatar/'+response.data.avatar+'.png');

            } catch (error) {
                setErrorFetchData(
                    <div className="errors">
                        Sorry something went wrong during the fetching the data
                    </div>
                )
            }
        }

        fetchData();
    }, []);

    return (
        <BaseContainer>
        <MenuSideBar active="PROFILE"></MenuSideBar>

            <div className="profilePage container">
                <div className="profilePage board">
                    <Grid container spacing={2} sx={{textAlign: 'center', justifyContent: 'center'}} >
                        <Grid item xs={6} sx={{justifyContent: 'center'}}>
                            <div className="profilePage containerTitle">
                                <Avatar  alt="Remy Sharp" src={avatar} sx={{width:90, height:90}} />
                                <div className="profilePage userName">
                                    {user.username}
                                </div>
                            </div>
                            <div className="profilePage containerUserInfo">
                                <div className="profilePage userInfo">
                                    Description: {user.description}
                                </div>
                                <div className="profilePage userInfo">
                                    Total Wins: {user.wins}
                                </div>
                                <div className="profilePage userInfo">
                                    Total goals: {user.gotInGoals}
                                </div>
                                <div className="profilePage toEdit">
                                    <Button className="profilePage buttonToEdit" onClick={() => doEdit()}>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                            {errorFetchData}
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: 'center'}}>
                            <div className="table">
                                <div className="table tableName">
                                    Your stats
                                </div>
                                <TableContainer  component={Paper} sx={{maxHeight: 500}}>
                                    <Table stickyHeader aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell align="right">Wins</TableCell>
                                                <TableCell align="right">InGoal</TableCell>

                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.date}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, ...getStripedStyle(row.wins) }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.date}
                                                    </TableCell>
                                                    <TableCell align="right">{row.wins}</TableCell>
                                                    <TableCell align="right">{row.inGoal}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </BaseContainer>

    );
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default ProfilePage;
