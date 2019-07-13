# Cryptopia

<h3 align="center">Manage Crypto through the power of JS</h3>

## About

This is the main monorepo of Cryptopia, managed using [Lerna](https://github.com/lerna/lerna). This application has been built using mainly Typescript and Electron, to allow you to easily manage and monitor your Crypto currencies directly from your device using JS.

## Getting started

Cryptopia is primarily Node and Typescript based, so ensure you have the latest versions of Node installed. Further to this we also use `yarn` over `npm`.

### Code Bases

_API_ - Koa and Typescript API. For now just returns hello world. In the future will be an OAuth2 Passport provider, along with other things. _Runs on port 3000_.

### Docker

This project utilises Docker. It has both a Dockerfile as well as a docker-compose.yml. For local development, it is normally better to use the `docker-compose` approach.

### Docker commands

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `docker-compose up` | Boots up a MySQL and API instance         |
| `docker build -t    | Builds a docker image for the cryptopia   |
| cryptopia_api .`    | API.                                      |

### Useful commands

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `yarn start`        | Starts the platform in watch mode         |
| `yarn build`        | Builds packages using lerna               |
| `yarn lint`         | Lints all packages using tslint           |
| `yarn lint:fix`     | Fixes all linting errors using tslint     |
| `yarn prettier`     | Runs prettier formatting for all packages |
| `yarn prettier:fix` | Fixes any errors with prettier            |
| `yarn test`         | Runs all tests                            |

## Contributions

Feel free to contribute to this project! Have a look through our issues, and feel free to submit a few pull requests for anything with the labels `help wanted`.

Any questions feel free to reach out to me [here](mail:jdabarber5@gmail.com).
