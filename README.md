# [DEMO](https://template-renderer.vercel.app/)

## Local Development

Before running the application locally, make sure you have your `.env.local` file created, with filled values. See `.env.example` for required keys.

1. Run `yarn` to install dependencies
2. Run `yarn start`
3. Go to `http://localhost:3000` in your browser

The app is setup in a way that there is only one catch-all page which handles all the routing. Since client pages are tied to server endpoints, we rely on server response for a way to determine if page exists or not. This allows the app to be flexible enough so that new endpoint does not need to be manually added to the app as a known route.

Next.js is using incremental static regeneration, with a revalidation period of 60 seconds. This hits the sweetspot between SSR and SSG.

## What I would do differently

If I were to start this project again, I would probably not start it with TypeScript, unless there is something like tRPC provided so that server response types are available on client for easier development.

Other than that, I would make components that represent server component (hero banner and category lister) less generic. Right now, they just accept unmodified server data. Instead, I would make each have their own dedicated set of props of only required data.

## Potential for improvement

- If server was to expose an endpoint to get all available paths, this would allow Next.js to use SSG for the known pages, thus making TTFB much lower.

- Loading images on the client can be a bottleneck, since the server returns only one size of the image. Preferably, multiple media quality/size image urls would be returned.

- The design of the app is not fully according to the design in the PDF. PDF contains screenshots, rather than Figma files for example, which is almost impossible to inspect for paddings, fonts and colors.
