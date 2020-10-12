This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create App

```
npx create-react-app react-oidc --template typescript
```

## SSL

Follow the directions in ./ssl/README.md

Modify package.json

```
"start": "set HTTPS=true&&set SSL_CRT_FILE=./ssl/server.crt&&set SSL_KEY_FILE=./ssl/server.key&&react-scripts start",
```

## Install Typescript Typings for React

### Getting Started with TypeScript and React

- [TypeScript Handbook](https://www.typescriptlang.org/)
- [TypeScript Example on React](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) has a good overview on how to use React with TypeScript

To add TypeScript to a Create React App project, first install these Typescript Typings packages:

```
npm install typescript @types/node @types/react @types/react-dom @types/jest  --save-dev 
```

## Install oidc-client

[Oidc-client](https://github.com/IdentityModel/oidc-client-js)

```
npm install oidc-client --save
```

## Install Router

```
npm install react-router-dom --save
npm install @types/react-router-dom --save-dev
```

## Install react-toastify

```
npm install react-toastify --save
npm install @types/toastr --save-dev  
```

## install axios

```
npm install axios --save
npm install @types/axios --save-dev  
```

## install enzyme

```
npm install enzyme enzyme-adapter-react-16 --save-dev 
npm install @types/enzyme @types/enzyme-adapter-react-16 --save-dev
```

## install ramda

```
npm install ramda --save
npm install @types/ramda --save-dev
```

## install bootstrap

```
npm install react-bootstrap bootstrap --save
```

## Configure Environment

Configure these variables IDENTITY_CONFIG and METADATA_OIDC and the environment variables inside of the .env.development and .evn.production

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
