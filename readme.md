# Static Tweet

Completely customizable static tweet for Next.js applications.

## Demo

https://static-tweet.now.sh/1238918791947522049

## How to use

To have a working copy of this project, run the following command:

```bash
yarn create next-app static-tweet --example https://github.com/lfades/static-tweet/tree/master
```

To have full access to all Twitter elements, like videos and polls, you'll need a Twitter API Token, once you have it, copy the [`.env.local.example`](.env.local.example) file in the root directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then add your API token to `.env.local`, it should look like this:

```bash
TWITTER_API_TOKEN=...
```

For polls, make sure that you have **Tweets and Users** from **Twitter Labs** enabled for your app. It's required to get access to polls metadata.

## Add Static Tweets to Your App

Currently, there's no package to do this, however you're welcome to copy the files and add it to your project!

For an example, take a look at the following blog: [rauchg/blog](https://github.com/rauchg/blog/blob/master/pages/2020/2019-in-review.js)
