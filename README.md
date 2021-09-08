# Hi...

This is a Vue template that uses several packages to speed up the process of creating a project without having to create it from scratch because this template includes an authentication process as well as several other features to facilitate the development process.
Here are the list of packages that uses in this Vue template:

- [Firebase](https://firebase.google.com/)
  - as a BaaS (that handles auth function, also has tons of functions)
- [Vuex](https://vuex.vuejs.org/)
  - as a state management
- [Vue Router](https://router.vuejs.org/)
  - as a routing within Vue project
- [Buefy](https://buefy.org/)
  - as a UI component
- [Eslint](https://eslint.org/)
  - for identifying problematic patterns found in JavaScript code
- [Prettier](https://prettier.io/)
  - code formatter that can enforces a consistent style by parsing the code

## Project setup

### Set firebase config

Add `.env` file on the root project, then copy this variables into .env file:

```
VUE_APP_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
VUE_APP_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
VUE_APP_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
VUE_APP_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
VUE_APP_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
```

To get firebase configuration variables, please refer to this official [firebase documentation](https://firebase.google.com/docs/web/learn-more#config-object).

### Compiles and hot-reloads for development

```
npm install
npm run serve
```

### Compiles and minifies for production

```
npm install
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
