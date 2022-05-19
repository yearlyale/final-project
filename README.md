# Final Project - Operating Systems

## How to run

This node proyect has use the nodemon and express libraries just to execute the enviroment, using the next command:
####
    npm i

After all node_modules install, you can run the proyect using
####
    npm start
This will run the application.

## How it works

This application is just a configuration of the endpoints for many other applications where we can run every of them. This configuration is in ' app.js ' , we found here the imports of every module and the url.

To run every application, we can open a browser and put the entiere url for each endpoint. It's needed to say that this applications doesn't return a response, only make their executions in the console, so you will not see a response in the browser.

After tell this, if you are using Visual Studio Code, I really suggest to install and use the extension ' REST Client ', this extension allow us make REST petitions in VSC, with no need of a browser.

![image](https://user-images.githubusercontent.com/72165495/169180267-5d448f86-ae53-4000-85a5-8bcf11324aa6.png)

So, if you use the extension, we can use the file ' api/.http '. Here we're gonna find some configuration on the endpoints. We just need to click on ' Send request ' of each endpoint and we are gonna see the execution.

![image](https://user-images.githubusercontent.com/72165495/169180355-0c29def5-378e-44dc-bc0f-be73f10ce13c.png)

### About the Sixth Assignment endpoints

We see that there's two endpoints for this assignment, ' /listener ' and ' /reader ', the one that we're gonna use is ' /listener ', this micro app calls by itself the other app ' /reader '. We can call the other endpoint and we're gonna see the text like a response, but to see the entire flow, click on ' /listener '.

### About the Seventh Assignment endpoints and it's parameters

We se here that there are many endpoints, and some of them with query parameters. Depending on wich you call, the applications is gona do some action:


 *      /getFiles - /createFile - /deleteFile - /formatSystem

So just be carefull on wich action you execute, and the parameters.

On ' /createFile ' the parameters should look like this:

 *      /createFile?folder={ number }&file={ number }&value={ anyData }

And so, on the ' /deleteFile ' we do not need the value, so goes like this:

 *      /deleteFile?folder={ number }&file={ number }

##### Note: If you are also using the REST Client extension, you will see some variables, this ones are the folder, file, and value parameters, soy you need to edit this varables enstead of got to every endpoint and make changes.

![image](https://user-images.githubusercontent.com/72165495/169180424-864ec929-17c7-4cae-8c09-b29c5d797980.png)

###
        Team members:

        Garcia Mendoza Cesar Alejandro
        Lucero Martinez Bryan de Jesus
        Martinez Ortiz Danyaell
        Miranda Ayala Daniel
        Rios Cortez Leonel
        Rios Pacheco Luis Manuel
