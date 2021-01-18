# Next.js SSR with client-side refresh example

This Next.js example demonstrates how to:

- Load initial data using getServerSideProps
- Keep data fresh on the client after the initial load using `useSWR`

The app is [live on Vercel](https://next-ssr-example.vercel.app) for
demonstrative purposes.

## How it works

1. A function defined in `/utils/getData.js` returns the data we want in our
   page. This function is imported and invoked in two locations:
   - In `/pages/index.js`, invoked in `getServerSideProps`
   - In `/pages/api/data.js`, invokes in the main request handler function
2. In `/pages/index.js`, `getServerSideProps` returns the initial data
3. In the main page function, `initialData` is passed as the value to `useSWR`’s
   `initialData` option, giving an immediate value that we can destructure
4. `useSWR` also has `revalidateOnMount` set to true, so the client immediately
   refreshes the data from `/api/data` when the page is hydrated
5. You could also configure `useSWR` to refresh on an interval to keep it fresh!
