Introduction
Project Motivation
The motive of this project is to have you a taste of the environment and tools you will most likely come across in a front end role. Your focus should be to understand the role every tool and technology is playing in the overall architecture. You shouldn’t feel the need to memorize the particular commands, config setups, or structure that we create here. Every project in the industry will have its own custom setup, but if you understand the moving pieces, you will be able to get the gist of even far more complicated projects than this one.

Project Introduction - What You Will Build
We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Aylien to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Following are the project prerequisites:

Webserver - Node
Web application framework for routing - Express
Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
External script - Service Worker
External API - Aylien
Introduction to Natural Language Processing
NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.

NLP on Human Voice
For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

NLP on Text
An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context.

It requires a vast amount of knowledge from machine learning, deep learning, AI, statistics, and programming to create NLP systems and algorithms. But, thankfully we will use a new API called Aylien, that has put a public-facing API in front of their NLP system. We will use it in our project to determine various attributes of an article or blog post.
Rubric
Your project will be evaluated by a Udacity code reviewer according to the project rubric. Please make sure to re-review the rubric for detailed project requirements prior to submission.

Submission
Once you've met all of the rubric requirements, you can submit your project as either a zip file or a Github repository link.


Instructions Part 1
Project Instructions
This Github repository is your starter code for the project. Clone the refresh-2019 branch or download the ZIP file, although feel free to start from scratch! It is the same as the starter code we began with in Lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Service workers
Using APIs and creating requests to external URLs
We have divided the instructions into the following stages, as explained below:
Stage 1 - Getting Started - Setting up the Project
It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally.

Note: Don't forget to fork the repo and then clone the branch "refresh-2019".

Remember that once you clone, you will still need to install everything:

``cd <project directory>``
``npm install``
Follow the steps from the course up to Lesson 4, but do not add Service Workers just yet. We won't need the service workers during development, and having extra caches floating around just means there's more potential for confusion.
For reference, here is a brief summary of the steps that you need to follow from the course up to Lesson 4.

After npm install, verify if both webpack.dev.js and webpack.prod.js files have:
``const path = require("path") 
const webpack = require("webpack") 
module.exports = { }
Your Webpack installation must be completed by now.

Verify, if both the Webpack config files have an entry point:
module.exports = 
{ 
entry: './src/client/index.js' 
}
Note: There should be an index.js file in the client folder, if it’s not there you need to create it and add an alert: alert("I EXIST").

Now, that the Webpack entry is decided, you need to have babel installed: npm i -D @babel/core@^7.5.4 @babel/preset-env@^7.5.4 babel-loader@^8.0.6.
Verify if the .babelrc file has:
{
'presets': ['@babel/preset-env']
}``
Both Webpack config files should have the test for babel-loader. Note: Remove quotes from /.js if they are present here.
In the client/index.js file make imports for checkForName and handleSubmit, if they are not present. Don't forget to export these js files.
Now let us move to plugins, install the HTML plugin npm i -D html-webpack-plugin@^3.2.0.
We need to add the require at the top of your Webpack config files
const HtmlWebPackPlugin = require(‘html-webpack-plugin’)
Add a plugins list to the Webpack config and instantiate the plugin
``plugins: [
new HtmlWebPackPlugin({
template: "./src/client/views/index.html",
filename: "./index.html",
})
]
Update your server file. Change the home route to use the index file from dist:
app.get('/', function (req, res) {
res.sendFile('dist/index.html')
})
Update app.use(express.static('src/client')) to app.use(express.static('dist')).``
Verify if the mode is present in both dev and prod files.
Let’s install the clean webpack plugin: npm i -D clean-webpack-plugin@^3.0.0 and add this new plugin to the plugin array as discussed earlier in plugins lessons.
Rename all the .css files in client/styles to .scss.
Install the sass loaders npm i -D style-loader@^0.23.1 node-sass@^4.14.1 css-loader@^3.6.0 sass-loader@^7.3.1.
Add the test case to the rule in webpack.dev.js and prod:
``{
test: /.scss$/,
use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
Now, we can import the scss files like this in client/index.js:
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
Just for your quick reference, we installed the following loaders and plugins so far:

# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin``
Note: If you are facing package compatibility issues, here is a proposed set of packages with their versions. These versions are compatible with each other. "dependencies": { "dotenv": "^8.2.0", "express": "^4.17.1", "jest-fetch-mock": "^3.0.3", "webpack": "^4.35.3", "webpack-cli": "^3.3.5" }, "devDependencies": { "@babel/core": "^7.13.15", "@babel/plugin-transform-modules-commonjs": "^7.13.8", "@babel/preset-env": "^7.13.15", "babel-loader": "^8.2.2", "body-parser": "^1.19.0", "clean-webpack-plugin": "^3.0.0", "cors": "^2.8.5", "css-loader": "^5.2.1", "html-webpack-plugin": "^3.2.0", "jest": "^26.6.3", "mini-css-extract-plugin": "^1.4.1", "node-fetch": "^2.6.1", "node-sass": "^5.0.0", "optimize-css-assets-webpack-plugin": "^5.0.4", "sass": "^1.32.8", "sass-loader": "^10.1.1", "style-loader": "^2.0.0", "terser-webpack-plugin": "^5.1.1", "webpack-dev-server": "^3.11.2", "workbox-webpack-plugin": "^6.1.5" }

As these versions are not the latest versions, make sure to install them with: bash npm i --legacy-peer-deps
