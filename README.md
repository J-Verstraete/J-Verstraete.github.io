# rombit-case-Frontend

Please find the deployed application on https://j-verstraete.github.io/
## What Rombit asked:

### Gewenste basis tijdens presentatie:

- Schrijf een gebruiksvriendelijke applicatie die op een kaart, de Velo stations van Antwerpen visualiseert.
- Open API: http://api.citybik.es/v2/networks/velo-antwerpen

### Additional features, maar geen must:

- Een lijstview.
- Zoekfunctionaliteit naar velo stations.
- API polling die ervoor moet zorgen dat de view regelmatig refreshed.
- Markeren van stations als favoriet.

### Tools & frameworks:

- Maak de app aan via https://github.com/facebook/create-react-app
- Maak gebruik van Typescript
- Zorg voor de volgende dependencies:
    - Leaflet: https://react-leaflet.js.org/
    - Redux & redux saga: https://github.com/redux-saga/redux-saga
    - Axios: https://github.com/axios/axios
    - Jest for unit testing

## What I made:

First of all: Rombit did not specify a timeframe. That is why I gave myself 8 hours to finish this task.

Since i have no prior experience with React, I made the following changes to the tools & frameworks:

- React -> Vue 2.x
- React-Leaflet -> Vue-Leaflet
- Redux -> Vuex store

## Completed requirements:

### What Rombit asked

- An (in my eyes) user-friendly application that visualises the Velo stations of antwerp.
- A listview (Making use of Vue-router)
- Searching functionality
- Keeping the map up-to-date by API-polling (I added a little spinner in the header for visualisation purposes)
- Rating the stations.
- Keeping most of the data in the store.

### My own extra functionalities

- It's a PWA! Because why not?! I love PWA's. Why you ask?
    - They are supported by every almost modern browser.
    - They are installable as a standalone application.
    - they support offline functionalities (not implemented here)
- Routing
- Location-based functionalities
- I deployed the application on Github Pages. (I guess I can now add Deployment on my resume, no?)

### What I didn't do

- TESTING!! I know. This is one of the most important things when developing an application. My reasoning:
  - I have given Rombit a java-application in which Testing is done properly. 
  - I wanted to implement as much features as possible and I had a tight schedule.

### bugs & stuff
- Not every resolution of the icon is updated. On some devices it will show the default Vue-icon.
- The map is not a perfect 100% screen-height.


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
