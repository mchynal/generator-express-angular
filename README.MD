# express + angularJS + mongoDB yo generator


**Installation**

    npm install -g bower yo generator-expressjs-angular


**How to use generator**

    mkdir my-app
    
    cd my-app
    
    yo expressjs-angular

**How to start app**

    cd my-app

development:

    npm run supervisor - start application in development mode
    npm run gulp-watch - start gulp watcher, observe client-side js files and concat to single file app.js

    http://localhost:3000/


production:

    npm start - start application

    http://localhost:3000/



**Subgenerators**

     yo expressjs-angular:make controller MySuperCtrl

     yo expressjs-angular:make directive MyAwsomeDirective

     yo expressjs-angular:make service MyService