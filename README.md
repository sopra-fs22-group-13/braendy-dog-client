# SoPra FS22 Brändi Dog

# Introduction
TO BE DONE

# Technologies
TO BE DONE

# High-level components
TO BE DONE (not the same as in backend?)

# Launch & Deployment
For your local development environment, you will need Node.js. You can download it [here](https://nodejs.org). All other dependencies get installed with:

```npm install```

Run this command before you start your application for the first time. Next, you can start the app with:

```npm run dev```

The application will now listen on [http://localhost:3000](http://localhost:3000).

This is the client application. It will run without the server, but functionality is minimal. For all functions, the client expects the [server](https://github.com/sopra-fs22-group-13/braendi-dog-server) to listen on [http://localhost:8080](http://localhost:8080).

## Build
`npm run build` builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance: the build is minified, and the filenames include hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Illustrations
The user starts on the login page where they either log in to an existing account or register a new one. After that they get redirected to the menu page. <br>
<p align="center">
    <img src="public/resources/illustrations/menu-page.png" width="50%"/>
</p>
From the menu page the user starts a new game by clicking on "Create Game" to get to the lobby page.<br>
From the lobby page the user invites 3 other users over the searchbar component to join their lobby.
<br><br>
<p align="center">
    <img src="public/resources/illustrations/lobby.png" width="50%"/>
</p>
Once the lobby is full, the lobby owner can start the game and everyone gets redirected to the game page. <br><br>
<p align="center">
    <img src="public/resources/illustrations/game.png" width="50%"/>
</p>
The game page is the main page of our web application. After the game of dog is completed, every user gets redirected to the menu page again. <br>
Alternatively to starting a game, the user could also view or edit their profile. <br><br>
<p align="center">
    <img src="public/resources/illustrations/user-flowchart.svg" width="50%"/>
</p>

# Roadmap
With a fully functioning base version of the game, the next steps to develop the application in the future would be:

- **Game mode 'Team play'** <br> In this game mode 2 players go up against another team. This enhances strategic gameplay and would include the swap of a card with your teammate at the beginning of each round and the possibility to move each others marbles under certain conditions (see original [instructions of Brändi Dog](https://www.braendi-dog.de/braendi-dog-spielregeln-anleitungen.html)).
- **Implementation of an AI opponent** <br> In this game mode the AI compensates for any missing players, allowing for a game of dog with less than 4 users. This increase the user experience and advance the playability of the application.
- **Refactoring the Marbles class** <br> This step only affects the Frontend. Currently the Marbles class has too many responsibilities and collected quite some technical debt. Refactoring it would increase the evolvability and maintainability of the application.

# Authors
TO BE DONE

# License
TO BE DONE

# Acknowledgments
TO BE DONE
