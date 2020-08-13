# Readme

CRUD Cake app. 


React / Bootstrap frontend. 


Node / Express / Mongo backend. 

## Requirements

* Node >= 14.5
* Yarn installed globally.

## Installation

In project root ```cake/```

```cp example.env .env``` copy environment vars


```yarn``` to install npm modules


```yarn start``` to launch client and server.


App at ```http://localhost:1337```


API at ```http://localhost:1338```


## Tests

In project root ```cake/```


Start server ```yarn server```


Run test ```yarn test```

### Comments on process

Chose to use [this boilerplate](https://github.com/alexdevero/express-react-webapp-boilerplate) as base scaffolding and used my own past work to inform technical approach to server.


Not designed for production use. Only intended for use in local environment.


Tasks remaining to be completed listed in repo [issue queue](https://github.com/pau1m/fullstack-test/issues) (I went over time).


Ignored the user stories in terms of chunking commits (no branches / pull requests) and instead used (relatively) atomic commits - to give a fully realistic path of progress. In retrospect, might have been a bit over-the-top in terms of number of commits.


Got hung up on a couple of stupid bugs.

* Old version of React didn't allow modern functional components. Had to update React and Webpack and add additional package.
* Set to only allow Patch but was actually using put. Mismatch between routes and accept header.
* Using singular 'cake' in postman path (compounded by issue above)

### Screenshots

Main page
![page](https://github.com/pau1m/fullstack-test/blob/master/notes/page.png?raw=true)

Cake form
![page](https://github.com/pau1m/fullstack-test/blob/master/notes/cakeform.png?raw=true)

Cake display
![modal](https://github.com/pau1m/fullstack-test/blob/master/notes/cakemodal.png?raw=true)
