# ElixirConfAfrica Web 2022
> Official conference website

> Nuxt 3 implementation
We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

## Building Components

UI inspiration from this [https://demo.themewinter.com/wp/exhibz/home-9](https://demo.themewinter.com/wp/exhibz/home-9/) 

All components sit in `/components` directory. check on [nuxt 3](https://v3.nuxtjs.org/)

## Style Guide

All styling are handled by [Tailwindcss](https://tailwindcss.com/) including paddings, margins, colors, font sizes etc.

All colors are included in the `tailwind.config.js` file. Any added color has to have a provision for dark theme and classes included in code too;
```html
<span class="text-primary dark:text-primary-dark"></span>
```

The file `assets/css/main.css` has some already applied classes, you can add more here



## Deployment
Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
