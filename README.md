# Prismic NextJS Typescript Template

## Intro

This is a React NextJS template for [Prismic](https://prismic.io) with Slice Machine.

This template contains the bare basics needed to setup a prismic repo with dynamic pages and slicemachine. All with examples to show of everything needed. Includes SEO, PWA, GTAG and protection on non production environments.

### Dependencies

Main dependencies used:

- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js/)
- [Typescript](https://github.com/microsoft/TypeScript) (dev)
- [Prismic](https://github.com/prismicio)
- [Styled components](https://github.com/styled-components/styled-components)
- [Eslint](https://github.com/eslint/eslint) (dev)
- [Prettier](https://github.com/prettier/prettier) (dev)

Other dependencies:

- [@storyofams/next-password-protect](https://github.com/storyofams/next-password-protect) for protection of staging releases.
- [next-pwa](https://github.com/shadowwalker/next-pwa)
- [next-seo](https://github.com/garmeeh/next-seo)

## Getting Started

### Placeholder variables

Change following variables with your own, for easy of use `{{variableName}}` is used to easily find them.

| Name          | Description                           | file      | example        |
| ------------- | ------------------------------------- | --------- | -------------- |
| `prismicRepo` | The repo name of your prismic project | `sm.json` | prismic-repo-1 |

Other important information that needs changing:

- Repository config in `package.json`: everything needed for your repository. Things like name, description and repository URL
- SEO in `next-seo.config.js`: this is the default SEO data, if not provided in prismic. If you do not like hard coding default data, remove this file. This includes the `og-image.jpg` in `/public`
- Theme in `theme.ts`: this contains the styled components theme you will be working with.
- Fonts in `_documents.tsx`: include the font you want in the `<Head>` tags
- Favicon stuff in `/public`: this includes the favicon icons and manifest.json

### Environment variables

Add following ENV variables to a file in the root names: `env.local`

| Name                     | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `GA_TRACKING_ID`         | Google Analytics tracking ID                                 |
| `STAGING_LOGIN_PASSWORD` | Password used to login op staging with next-password-protect |

### Running

First, make sure to set the `prismicRepo`, then install the dependencies:

```bash
yarn
```

After, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then run slicemachine server:

```bash
yarn sm
```

Open [http://localhost:9999](http://localhost:9999) to see the slicemachine interface.
