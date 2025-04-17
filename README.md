# Headless Ecommerce Storefront

A Shopping Cart built with [TypeScript](https://www.typescriptlang.org), [Tailwind CSS](https://tailwindcss.com), [Headless UI](https://headlessui.com), [Next.js](https://nextjs.org), [React.js](https://react.dev), [Shopify Hydrogen React](https://shopify.dev/docs/api/hydrogen-react),... and [Shopify Storefront GraphQL API](https://shopify.dev/docs/api/storefront).

## Experience

When I started this project, I had no idea how complex building a storefront could be. But step by step, I figured it out.

I designed and built everything from scratch—structuring data, styling components, making sure everything loads fast. I used [GraphQL Zeus](https://github.com/graphql-editor/graphql-zeus) to talk to [Shopify’s GraphQL API](https://shopify.dev/docs/api/storefront), [Shopify Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen-react) to power the storefront, and [Next.js](https://nextjs.org) for performance.

[Tailwind CSS](https://tailwindcss.com/) and [Headless UI](https://headlessui.com/) made styling smooth. [TypeScript](https://www.typescriptlang.org/) kept everything safe and predictable. [React Use](https://github.com/streamich/react-use) Hooks sped up development. I even built [Shopify Utilities](https://www.npmjs.com/package/@maxvien/shopify) to make selecting product variants easier.

Then came [SEO](https://www.npmjs.com/package/next-seo), best practices, and refining the user experience. [Swiper](https://swiperjs.com/) made touch interactions feel natural. [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) kept the code clean.

It was a process of learning, breaking things, fixing them, and refining. And in the end, it wasn’t just about building a store—it was about building something that works beautifully.

If you like this project, hit the **STAR** button to bookmark it ⭐️

## Demonstration

You can visit here to see the demo: https://next-shopify-storefront.vercel.app/

## Installation

Clone the source code into your computer.

```bash
git clone https://github.com/AJ-logic/headless-ecom-store.git
```

**This project was developed with Node 18 and NPM 10.**<br>

To set up a compatible environment, please download [Volta](https://github.com/volta-cli/volta) and run `volta setup`.

Then, install the project's dependencies.

```bash
npm install
```

## Usage

First, you need to set the below environment variables in the `.env` file or your deployment platforms.

- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN`
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION`

You can follow the [Shopify Storefront GraphQL API](https://shopify.dev/api/storefront/getting-started) documentation to get Storefront API information.

### Develop

Develop the project in development mode.

```bash
npm run dev
```

### Build

Build the project in production mode.

```bash
npm run build
```

### Start

Start the project in production mode.

```bash
npm run start
```

### Lint

Analyze the code to find problems with `eslint` and `prettier`.

```bash
npm run lint
```

Automatically fix problems.

```bash
npm run fix
```

## Visual Studio Code Extensions

To speed up your productivity, you can install these extensions:

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
