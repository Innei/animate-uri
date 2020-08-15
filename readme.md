# Animate URI

Animate your url transitions for that extra flair.

Inspire by [Neal Agarwal](https://twitter.com/nealagarwal/status/1293578708247248897)

Look at [demo](https://innei.github.io/animate-uri/)

## Usage

First,

```sh
yarn add animate-uri
```

Then

```js
import { animateUriFactory, bindAllLink } from 'animate-uri'

animateUriFactory({ duration: 60, shouldPushState: false }).start(
  '/hello-world',
  '/',
)
```

Or you can bind all link(should in `a` tag href)

```js
const instance = bindAllLink() // return a instance
// do anything...
```

More fun ways to use, you can change text after once finished animate, and again.

```ts
instance
  ?.start('/hey，这里是Tomon~。谢谢你能来看我~')
  .then((i) => i?.start('/類は友を呼ぶ，独特的人会找到独特的人'))
  .then((i) => i.start('/'))
```

## Used in Next.js

You can use this into your next.js application. In the `_app.tsx`, add event listener on router change.

```tsx
import { animateUriFactory } from 'animate-uri/publish/index.esm'
const animateInstance = animateUriFactory()

// componentDidMount(): void {
Router.events.on('routeChangeStart', (url) => {
  animateInstance?.start(url)
})

Router.events.on('routeChangeComplete', () => {
  animateInstance?.stop()
})

// }
```

That's all. Enjoy.
