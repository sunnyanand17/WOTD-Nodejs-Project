# WOTD-Nodejs-Project
A basic API for generating the Word of the day using nodejs

This project uses the express package , which is a web application framework for Node.js
#Steps to install the Node.js and Express

Node.js installation `brew install node` 
Express installation `npm install express --save`

API Definition:  `/wotd/{date}`
Sample API : `localhost:3000/wotd/today`

In case of invalid URI `404` response is thrown.

At present the API is designed to work for only the current date. 

Future scope: Adding a database and integrating it with the application. This will allow the application to use past dates, future dates and fetch results for each such dates.
