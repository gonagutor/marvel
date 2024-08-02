This project is a small web page that displays Marvel characters information obtained from the Marvel API

## Live version

### There is a live version of this page hosted at https://marvel.gonagutor.com/

Marvel's API [hasn't been working properly for days](https://www.reddit.com/r/MarvelUnlimited/comments/1eb5ey4/has_anyone_else_noticed_extremely_slow_response/) so the search function and the details page may timeout

I've set the time it allows before the edge function times out to the maximum Vercel allows, but sixty seconds may still not be enough

Marvel's documentation does not provide any contact information so there is nothing I can do about this

## Getting Started

Before you start the server you must get your API keys at https://developer.marvel.com/account

Make a copy of `.env.example`, rename it `.env.local` and replace the dummy keys with the keys you got from Marvel's developer portal

#### Install the packages needed

```bash
npm install
```

#### Run the server

```bash
npm run dev
```

#### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you get tired of waiting two full minutes for the API to answer, there is a variable called **IS_API_BEING_DUMB** located at `pages/api/character.ts` that, when set to true, will mock the answer of the API, maintaining the search capabilities

Keep in mind the `/details/[id]` page will still ask the API for the character's data, but the wait shouldn't be longer than a minute

## About this project

### Testing

Tests are setup using Playwright.

Since sometimes testing Server Components is less acurate compared to using Jest and plain React, I decided to use Playwright to avoid mocking requests, allowing the tests to truly check if everything is working correctly

Tests are setup to run on Chromium, Firefox and Safari. Chromium and Safari are also tested against mobile viewports

To run the tests run the command `npm run test`

### Folder structure

#### App

The `/app` folder serves UI routes. The folder structure defines the path in which the pages will be shown.
The `page.ts` file contains the code of the page itself

Two routes are setup right now:

- **/:** Shows the search page. Though some components are Server components this page is mostly client-side
- **/details/[id]:** Shows the details of the charater id passed in the _id_ parameter. Except the Header and CharacterHeader, this page is prerendered and data is fetched on the server before serving the page

#### Pages

The `/pages` folder contains the `/api` folder in which the only internal route needed for the site is located.

This route is needed to be able to update the character list as you type.

Since the API needs a private and a public key, I use this internal endpoint to avoid leaking them

#### Public

Contains all files which can be publicly accessed, mainly icons and pictures

#### Components

Components can be found in the `/components` folder. Contains all the components used in the app

#### Hooks

React hooks can be found in the `/hooks` folder.
Only one hook is needed

- **useCharacter:** Handles the request to the internal character api. This hook is needed because the search parameter can change and data retrieval must be interactive

#### Models

Models can be found inside the `/models` folder. Three models exist

- **Character model:** Defines the shape of the Character object, handles data extraction , and implements requests for retrieving one or many characters
- **Comic model:** Defines the shape of the Comic object and handles data extraction and formatting
- **Favorites model:** Handles retrieval/parsing of favorites stored in localstorage

#### Providers

React providers can be found inside the `/providers` folder. Two providers are implemented.

- **Favorites provider:** Loaded on every page. Manages adding/removing favorites and keeping track of current favorites
- **Search provider:** Loaded only when the page can be searched. It doesn't need to be loaded on every page so it is as deep as posible in the tree. Manages the search bar state and handles fetching characters from the api. When favorites are selected it uses the favorite character list instead of the fetched list.

#### Tests

The `/tests` folder contains Playwright's E2E tests. Currently divided in three diferent files: details.spec.ts, favorites.spec.ts and search.spec.ts

Currently all tests pass, but since the API is constantly acting up some tests may timeout
