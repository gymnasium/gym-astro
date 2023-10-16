# Gym Astro

[![Netlify Status](https://api.netlify.com/api/v1/badges/12a98394-f8bb-492c-95d7-378da0c13e5c/deploy-status)](https://app.netlify.com/sites/gym-astro/deploys)

### Prerequisites
- [node.js](https://nodejs.org/)
- [NVM - Node Version Manager](https://github.com/nvm-sh/nvm) (recommended)

Steps:
If using nvm, start with:
```
nvm use 
```
Otherwise, proceed with installing the appropriate node version and continue from there:

```
npm install
npm run dev
```

### Note

If you are not currently serving the gymcms on port 4000 in your local environment, Astro will throw an error. A simple workaround
is to change the first line of `/src/globals.ts` to:

```js
export const CMS_URL = 'https://data.gym.soy'
```
