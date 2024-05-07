## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [MySQL](https://dev.mysql.com/downloads/installer)

Both should be installed and make sure mongodb is running.

Now install the dependencies
# on cmd promt/powershell 
cd backend
npm install

cd frontend
npm install

We are almost done, Now just start the development server.

For Frontend.
# on cmd promt/powershell 
cd frontend
npm start

For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
# on cmd promt/powershell 
cd backend
nodemon index.js
or
npx nodemon index.js

Done! Now open localhost:3000 in your browser.

# Set Up your .env file and Boom.!! 


Your app should be working.



