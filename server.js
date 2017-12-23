require('babel-register')({
    presets: ["es2015","react"]
});
require('ignore-styles').default(['.sass', '.scss']);

const express = require('express');
const React = require("react");
const ReactRouter = require('react-router-dom');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const webpack = require('webpack');
const config = require("./webpack.config.prod.js");
const webpackMiddleware = require('webpack-dev-middleware')
const App = require('./src/components/App').default;

const { createStore } = require('redux');
const { Provider } = require('react-redux');
const  reducer = require('./src/reducers/index.js').default;

const app = express();
const compiler = webpack(config);
const StaticRouter = ReactRouter.StaticRouter;

app.use('/public', express.static('public'));

app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath
}))


// function render(template){
//     return fs.readFile('./public/index.html','utf8', (err,data) => {
//         if(err) throw err;
//         return data.replace(/<div id="app"><\/div>/, `<div id="app">${template}</div>`);
//     })   
// }

app.get('*',(req,res) => {
    const context = {};
    const store = createStore(reducer);
    const body = ReactDOMServer.renderToString(
    	React.createElement(Provider, {store},
        React.createElement(StaticRouter, { location: req.path, context }, React.createElement(App))
      ));
  
    fs.readFile('./public/index.html','utf8', (err,data) => {
    if(err) throw err;
        const document =  data.replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`);

        if(context.url){
            res.redirect(301, context.url)
        }

        res.send(document);
    })   
})

app.listen('3000', () => {
    console.log('app is listening on port 3000');
})