# AJAX Example

A simple application to show the usage of AJAX requests

It's an exercise for Distributed Systems class

## Requirements

This app is built with these techs:

* Yarn (1.22.4)
* JavaScript
* HTML

## What does it do

This simple app makes AJAX request to [Github API](https://developer.github.com/v3/) and uses autocomplete to search users by their usernames and return information about them, such as avatar profile, login username, email...

## Setup

First, make sure you have [Yarn](https://yarnpkg.com/) installed in your machine with this command:

```shell
yarn --version
```

If doesn't, follow these [instructions](https://classic.yarnpkg.com/en/docs/install/)

After installation, you should get your Github API keys: Client ID and Client Secret (follow these [instructions](https://paw.cloud/docs/examples/github-api) to get them) and run this command:

```shell
cp .env.sample .env
```

Fill the `.env` with your keys

To finish, run `yarn install` to install all packages

## Running

Run `yarn start` and open [http://127.0.0.1:8080](http://127.0.0.1:8080/index.html) to input the username that you want.
