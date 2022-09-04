This is a simple [Next.js](https://nextjs.org/) authentication project without [next-auth](https://next-auth.js.org/) library

See the [Demo](https://simple-auth-next.vercel.app/) page

## Getting Started

#### 1. Install Project

```bash
yarn install
```

#### 2. Run Project

```bash
yarn dev
```

#### 2. Open Browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Overview

1. This is ***Credential Authentication***
2. You can customize the **Auth Provider** as you want such as oAuth (e.g Google, Facebook, Twitter, Github, etc...), Email, Credentials, JWT, etc...
3. This auth using Redux with tools such as redux toolkit, redux thunk, and redux persist
4. This auth data stored to Cookies with redux persist. Therefore data will not be lost even reloading the browser
5. You don't need to add auth validation on every page. Just set what prefix path do you want to become protected route from **middleware.ts** or **Layout Provider**. For example:
```bash
'admin' will protect all routes start with 'admin'
e.g admin/:path*, admin/:path/:path/:path, and so on
```
6. Cookies expiration / max-age can be set from ***persistedReducer*** in `./_redux/index.tsx` (default 1 hour)
7. Theming using ***CSS Post-Processor*** (Tailwind)
8. Added support ***CSS Pre-Processor*** (Sass, Scss)
9. bootstraped with `create-next-app`


#### Pull request very welcome 🙂