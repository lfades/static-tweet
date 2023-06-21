# Static Tweet

Embedded and static tweet for Next.js applications using [react-tweet](https://github.com/vercel-labs/react-tweet).

## Demo

- https://static-tweet.vercel.app/dark/1238918791947522049 - Dark mode, using the `app` directory.
- https://static-tweet.vercel.app/light/1238918791947522049 - Light mode, using `pages` with `getStaticProps`.
- https://static-tweet.vercel.app/light/swr/1238918791947522049 - Light mode, using `pages` with [SWR](https://swr.vercel.app/).

## How to use

To have a working copy of this project, run the following command:

```bash
pnpm create-next-app --example https://github.com/lfades/static-tweet/tree/main static-tweet
```

## Add tweets to your app

This example uses [react-tweet](https://github.com/vercel-labs/react-tweet) to render the tweets, you can see it in usage in [Rauchg's blog](<https://github.com/rauchg/blog/blob/main/app/(post)/components/tweet.tsx>) and by going to its [Next.js documentation](https://github.com/vercel-labs/react-tweet/blob/main/apps/next-app/readme.md).
