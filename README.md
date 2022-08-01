# ABN TVMaze Assignment

## Installation and setup

The entire application consists of a (very tiny) back-end, and a front-end.

### Prerequisites

- Node version 14 or higher

### Step 1: Running the back-end

- `cd backend`
- `npm i`
- `npm run dev`: should start the server on `http://localhost:9088` by default

### Step 2: Running the front-end

- `cd frontend`
- `npm i`
- (Make sure the `VITE_ABN_TVMAZE_PROXY_BASE_URL` variable in `frontend/.env`
  points to the correct back-end URL; if you don't change the defaults, it will
  be fine)
- `npm run dev`: runs a dev server with Vite

## Background

### Notes from the assignment description

- Use any frameworks of your choice
- Application must be responsive and mobile friendly
- Please keep it to a minimum in leveraging/using scaffolding tools/boilerplate
  templates/plugins. We don’t expect you to create things from scratch but, we also
  would like to see your own creation
- Please create a readme file that explains your architectural decisions (E.G. why did
  you choose a specific framework) and make sure you include instructions on how to
  run your solution
- Please make sure that UI is simple yet eye-catching
- Please include unit tests
- Please feel free to include more features other than a few mentioned below

### Application requirements

- Create an application that allows users to view a (preferably) horizontal list of TV shows based
  on different genres
- Display a few popular TV shows based on their rating and genre on a dashboard
  and when the user clicks on a TV show then the details of the TV show should be displayed on another screen.
- The user should be able to search for a TV show to get the details
- You can design your own UI which fits the requirements

### Decisions and reasonings

#### Tech stack

- Main web framework: Vue, as per requested
- Type of app: SPA

#### Project setup, tooling, scaffolding

First of all, things we certainly want in our project setup:

- Vue + SFC's
- Typescript
- ESLint w/ TS and Vue support
- Prettier
- Unit testing
  - Jest vs. Vitest: Jest (because Vitest doesn't seem have a major release)
- a dev server (npm run start, watch, or dev)
- production build (npm run build)

#### Initial setup

For setting up a new Vue project, we have the following options as starting points:

- Setting up everything manually: custom Vite/Webpack setup
  - Minimal scaffolding
  - Time effective
  - Maintainability: everyone on the project must familiarize themselves with your setup, and if something needs to be
    changed, or goes wrong, it can be very difficult to debug
- npm create vite (template vue-ts): a relatively simple
  - Sets up Vue + SFC's, TS, and dev and build scripts
  - Set up the rest manually from there
- `create-vue` (npm init vue): the "Vue recommended" way of setting up a Vue project
  - Sets up Vue + SFC's, TS, ESLint, Prettier, Unit + E2E testing (optionally), dev and build scripts.
    - (Optionally even installs Vue Router, which we need as well, anyway)
- Honorable mention: Vue CLI: very similar to create-vue, except being Webpack-based instead of Vite-based. Since the
  Vue's official docs recommend using create-vue over Vue CLI (stating that it's in maintenance mode), we consider
  create-vue as the main option for a full, batteries-included setup.

Given these options, and based on the notes from the assignment description, we go for the second (middle-of-the-road)
option. We provide ourselves with a minimal Vite + Vue (+ Typescript) setup, and set up our project according to how
we like afterwards, manually.

In any other scenario, I would probably have gone with the third options (using `npm init vue`). But since the
assignment explicitly mentions to keep the scaffolding as minimal as possible, I adhere to it. While it is always
important to know your tools, and to know what is being used and installed in a project, these development/scaffolding
tools usually come with great benefits for productivity.

After our setup with Vite + the vue-ts template. We still need to add ESLint, Prettier, and our testing libraries.

- Installing Prettier for auto-formatting, and an easy, consistent coding format
  - `npm i -D prettier`
  - Set up a simple `.prettierrc`
- Installing ESLint
  - `npm i -D eslint eslint-config-prettier eslint-plugin-vue @vue/eslint-config-typescript`
  - Set up `.eslintrc.js`
- Installing Jest + Vue support
  - `npm i -D jest @vue/vue3-jest @testing-library/vue jest-environment-jsdom`
- Setting up some basic git hooks/actions on commit (with Husky)
  - install and set up Husky
  - install `lint-staged`: to make sure we don't commit files that don't pass linter rules ()
  - install `commitlint` + conventional commits: so we lint on commit messages as well, and all commit messages adhere to
    the same format

#### Styling

Options:

- Tailwind
- Custom
  - SCSS, CSS Modules, PostCSS

To keep in line with "keeping things as minimal as possible", we write all CSS
from stratch (no CSS frameworks, or utility class libraries). We use CSS modules
for scalability and avoiding naming conflicts.

#### Other

Design: "simple yet eye-catching"; something with a purple brand color

- Colors
  - Primary/brand: #ac58f5
  - Neutrals:
    - Darkest: #0f172a
    - Mid: #64748b
    - Lightest: #f8fbfe
- Typography
  - Lato
