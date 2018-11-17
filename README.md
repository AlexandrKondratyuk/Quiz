#gh-pages
https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

### Creating project
##### create-react-app react-quiz
##### yarn eject
delete unnecessary components
##### create hoc--> Layout --> Layout.js
(for wrapping main content) 
##### create src --> containers
for keeping components with state
##### create src --> components
for keeping functional components which display some content
##### create container --> Quiz --> Quiz.js & Quiz.css
and import to App.js
##### Quiz.js --> state --> quiz: []
##### ActiveQuiz.js 
creating block with questions and variants of answers
##### AnswersList
create AnswersList => AnswersList.js & AnswersList.css
##### AnswerItem
create AnswerItem => AnswerItem.js & AnswerItem.css
#### Quiz.js
create state quiz: {answers: [{text: 'some text'}]} at Quiz.js
#### FONTS
https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css
**********************
## React-router-dom
$ yarn add react-router-dom

###Validation library
https://www.npmjs.com/package/is_js

###SERVER
https://firebase.google.com/docs/remote-config/

#### Library for using server and ajax queries
$ yarn add axios

#### Loader
https://loading.io/css


#### _Auth_
search ('firebase rest auth') 
=> sign up with email/password 
=> from Endpoint copy link => change api key

# **REDUX**
1) $ yarn add redux react-redux redux-thunk
2) at index.js
    - import function createStore =>  import {createStore} from 'redux'
    - hoc Provider for supporting Redux at app => import {Provider} from 'react-redux'
    - create store => const store = createStore(rootReducer) // here will be rootReducer
    - wrap BrowseRouter in Provider with param <Provider store={store}>...</Provider>
3) create in src folder 'store' for keeping all for Redux
4) create in store folders 'actions' & 'reducers'
5) create in reducers folder file 'rootReducer.js'
    // rootReducer => a function that integrates all existing reducers
6) in rootReducer.js => import {combineReducers} from 'redux' 
    // esport function in wich we transfer config object and where we describe all reducers
7) at index.js => import rootReducer from './store/reducers/rootReducer'
8) set redux devtools from guthub => copy/paste function 'composeEnhancers' and 
    => import {createStore, compose, applyMiddleware} from 'redux'
9) add to const store => const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
10) in actions folder we create file 'actionTypes.js', where we will be keep all actions
    
    