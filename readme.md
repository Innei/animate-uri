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

To bind all inside links, (Optional)

```js
const instance = bindAllLink() // return a instance
// do anything...
```

That's all.
