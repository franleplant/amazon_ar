

## Deploy

```sh

# build client assets
npm run client:build

# commit them (i know i know, it's bad, but it works!)
git add client/*
git commit -m "new client build"

# deploy to heroku
git push master heroku

```
