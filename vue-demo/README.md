# vue-demo
A simple vue & webpack4 demo.

## Available scripts

### `npm run dev-server`

Runs ths demo in the development mode.<br>
The webpack-dev-server provides you with a simple web server and the ability to use live reloading. <br>
Open [http://localhost:8090](http://localhost:8090) to view it in the browser.

### `npm run dev`

Runs ths demo in the development mode.<br>
An example that combines webpack-dev-middleware with an express server.<br>
If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application.<br>
Open [http://localhost:8090](http://localhost:8090) to view it in the browser.

### `npm run prod`

Builds the demo for production to the `dist` folder.<br>
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run mock`
Simulate a backend REST service to deliver some data in JSON format to the front-end application.<br>
JSON-Server makes it extremely easy to setup robust JSON apis to use for demos and proof of concepts. <br>
Open [http://localhost:9090](http://localhost:9090) to view it in the browser.

### `npm run mockdev`
Runs ths demo in the development mode.<br>
Open [http://localhost:8090](http://localhost:8090) to view the demo in the browser. <br>
And the data in JSON format is deliverd from [http://localhost:9090](http://localhost:9090).



