# Online Course Player

A realtime online course player, built with React and Socket.IO.

# Function

This app is used to play course recordings.
![image](/public/player.png)

# Demo

- `Live Demo on Render:` <a href="https://course-player-react.onrender.com/" target="\_blank">https://course-player-react.onrender.com/</a>

# Setup Locally

```bash
git clone https://github.com/jojozhuang/course-player-react.git
cd course-player-react
npm install
npm start
```

Access http://localhost:12100/ in web browser and click 'Play' button, enjoy!

# Deployment

Follow tutorial [Deploying React and Socket.IO App to Heroku](https://jojozhuang.github.io/tutorial/deploying-react-and-socketio-app-to-heroku) to deploy this app to Heroku.

In Heroku, add Config Vars `NPM_CONFIG_PRODUCTION=false` to avoid **babel-node: not found** error, see https://stackoverflow.com/questions/36781542/package-json-start-script-babel-node-not-found-on-heroku-deploy and https://devcenter.heroku.com/articles/config-vars.

```sh
2021-07-15T04:42:36.017148+00:00 app[web.1]: [heroku-exec] Starting
2021-07-15T04:42:36.761666+00:00 app[web.1]:
2021-07-15T04:42:36.761713+00:00 app[web.1]: > course-player-react@1.0.0 start /app
2021-07-15T04:42:36.761714+00:00 app[web.1]: > NODE_ENV=development npm run open:src
2021-07-15T04:42:36.761714+00:00 app[web.1]:
2021-07-15T04:42:37.633980+00:00 app[web.1]:
2021-07-15T04:42:37.633993+00:00 app[web.1]: > course-player-react@1.0.0 open:src /app
2021-07-15T04:42:37.633994+00:00 app[web.1]: > babel-node tools/server.js
2021-07-15T04:42:37.633994+00:00 app[web.1]:
2021-07-15T04:42:37.651990+00:00 app[web.1]: sh: 1: babel-node: not found
2021-07-15T04:42:37.662023+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2021-07-15T04:42:37.662453+00:00 app[web.1]: npm ERR! syscall spawn
2021-07-15T04:42:37.662666+00:00 app[web.1]: npm ERR! file sh
2021-07-15T04:42:37.662909+00:00 app[web.1]: npm ERR! errno ENOENT
2021-07-15T04:42:37.671188+00:00 app[web.1]: npm ERR! course-player-react@1.0.0 open:src: `babel-node tools/server.js`
2021-07-15T04:42:37.671306+00:00 app[web.1]: npm ERR! spawn ENOENT
2021-07-15T04:42:37.671442+00:00 app[web.1]: npm ERR!
2021-07-15T04:42:37.671560+00:00 app[web.1]: npm ERR! Failed at the course-player-react@1.0.0 open:src script.
2021-07-15T04:42:37.671672+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

Follow tutorial [Continuously Deploy React and Socket.IO App to Heroku with Travis-CI](https://jojozhuang.github.io/tutorial/continuously-deploy-react-and-socketio-app-to-heroku-with-travis-ci) to continuously deploy this app to Heroku.

# Portfolio

Read portfolio [Course Player(React)](https://jojozhuang.github.io/project/course-player-react) to learn the main functions of this course player.

# Tutorial

Read tutorial [Building Course Player with React and Socket.IO](https://jojozhuang.github.io/tutorial/building-course-player-with-react-and-socketio) to learn how this course player is built.
