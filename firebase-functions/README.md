## Firebase cloud functions

This folder contains the firebase cloud functions for the trustlines.network site.

## Firebase service account

As we are using Firebase Storage to store the production release of the app, we need a firebase cloud function to retrieve the download url. This function can be found in `src/apk/get-download-url.ts`. For this we also need a service account that has access to the bucket of the `Trustlines Production` firebase project. Therefore copy the respective service account credentials JSON from 1Password and put it in `src/apk/trustlines-production-service-account.json`.

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
