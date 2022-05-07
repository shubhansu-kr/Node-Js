// How to use git with npm 

// Since the dependencies are installed locally, git will treat them as 
// as untracked files and would start tracking once you give the command 

// However most dependencies are huge in size and we dont want to bug the
// github repo with unnecessary file which can be installed via npm 
// and already present on the server, we ignore the npm_module folder 
// using the gitignore file

// Now for the users who is going to clone or fork the repo gonna use the
// dependencies file but since we haven't pushed the dependencies, won't
// it break our package?

// Actually NO, This is where package.json comes into play 
// when a user will clone the repo he has to run the command 
// npm install 
// which will then check the json file and download all the dependencies 
// listed in the file and package will be good to go.
 