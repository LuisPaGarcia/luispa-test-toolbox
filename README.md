# luispa-test-toolbox

## Requirements

- Use `nvm use` to install and set Node 10.x as used version.

## How to start the API

1. Install dependencies.

```sh
$ npm install
```

2. Run `start` script to load the server API.

```sh
$ npm run start:dev
```

## How to start the client (development)

0. Start the API server

```sh
$ npm run start:dev
```

1. Move to the `client` directory.

```sh
$ cd ./client
```

2. Install dependencies.

```sh
$ npm install
```

3. Run `start` script to load the server API.

```sh
$ npm run start
```

## How to start the client (Production)

0. Move to the `client` directory.

```sh
$ cd ./client
```

1. Install dependencies.

```sh
$ npm install
```

2. Run `start` script to load the server API.

```sh
$ npm run build
```

3. Move to the `root` directory.

```sh
$ cd ..
```

4. Run the start script

```sh
$ npm run start:prod
```

## TODO

- [x] Start client
- [x] Start server
- [x] Serve client files using expres
- [ ] Unit tests
- [ ] Integration tests
- [ ] Migrate it to TypeScript
