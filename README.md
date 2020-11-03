# Github Tracker App

## Table of Contents

- [How to deploy in local env](#how-to-deploy-local-env)
- [Production Deploy](#production-deploy)

## How to deploy in local env

Just use the 3 commands below in the terminal and the application should launch automatically. You will be prompt to enter the MONGO_URI value that is the folowing:

`mongodb+srv://github-tracker:<password>@github-tracker.83ul8.mongodb.net/github-tracker?retryWrites=true&w=majority`

the password to remplace is `github-tracker`. This is an atlas instancy in an account just created for this app purpose so no risk in sharing it here (i might just delete it after)

```
git clone https://github.com/erwanriou/github_tracker.git
cd github_tracker
npm run initiate
```

After this first launch and installation you can keep using the function below that is faster.

```
npm run dev
```

## Production Deploy

I made a quick production deploy in a free heroku instancy just in case. Feel free to visit this adress.
