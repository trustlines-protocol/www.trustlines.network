## Firebase cloud functions

This folder contains the firebase cloud functions for the trustlines.network site.

## Environment variables
The functions rely on some env variables to work. An example `env.dist.json`
file is distributed in the functions folder. Change the file name to either
`env.dev.json` or `env.prod.json` depending on what kind of config you are providing.

The emails.contactUs variable accepts multiple emails separated by comma.


If you are testing the functions locally run:
```
yarn config:set:dev
```

If you want to deploy the function first set the production config:

```
yarn config:set:prod
```

and then run

```
yarn deploy
```

## To emulate the functions locally

Make sure that you run `yarn watch` - this will build the typescript and watch for changes.

then to emulate the functions, make sure that you set the correct env variables.

And then run `yarn config:get` -> this creates the `.runtimeconfig.json` file
which contains the set env variables and is used by the firebase functions emulator.

Now to start the firebase functions emulator run:

```
yarn serve
```
