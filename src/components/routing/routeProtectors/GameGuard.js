/*
    dog-client is the client component of an online web implementation of dog.
    Copyright (C) 2022  Luca Zwahlen, Simona Borghi, Sandro Vonlanthen, Anton Crazzolara, Shitao Zeng

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import { heartBeatCreator } from "helpers/heartBeatCreator";

export const GameGuard = props => {
  if (localStorage.getItem("token") && localStorage.getItem("lobbyId") && localStorage.getItem("gametoken")) {
    heartBeatCreator.setType("GAME");
    return props.children;
  }
  return <Redirect to="/lobby"/>;
};

GameGuard.propTypes = {
  children: PropTypes.node
};