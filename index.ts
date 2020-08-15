/*
 * @Author: Innei
 * @Date: 2020-08-13 21:31:23
 * @LastEditTime: 2020-08-15 21:05:21
 * @LastEditors: Innei
 * @FilePath: /url-animation/index.ts
 * @Coding with Love
 */
const isSSR = typeof window === 'undefined'
interface AnimationConfig {
  duration?: number
  shouldPushState?: boolean
  backspacingEmoji?: string
  buildingEmoji?: string
}
export const EmojiRegExp = /<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu
export const animateUriFactory = (
  config: AnimationConfig = {
    duration: 60,
    shouldPushState: true,
    backspacingEmoji: `🔨👴`,
    buildingEmoji: `🍻`,
  },
) => {
  if (isSSR) {
    return
  }
  if (!('replaceState' in history)) {
    throw new Error('browser not support replaceState.')
  }

  let timer: number | undefined = undefined
  let navigator = ''
  const duration = config.duration || 100
  const shouldPushState = config.shouldPushState || true
  const backspacingEmoji = config.backspacingEmoji || `🔨👴`
  const buildingEmoji = config.buildingEmoji || `🍻`

  return {
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to: string, startWith?: string | undefined) {
      return new Promise((resolve, reject) => {
        if (typeof to !== 'string' || to.charAt(0) !== '/') {
          reject(new Error('to must start with `/`'))
        }

        if (timer) {
          timer = clearInterval(timer) as undefined
        }
        if (startWith && startWith.charAt(0) === '/') {
          history.replaceState(null, '', startWith)
        }
        let once = false
        const currentTitle = document.title

        timer = setInterval(() => {
          let beforeUri = decodeURI(location.pathname).replace(EmojiRegExp, '')

          if (beforeUri === to) {
            resolve(this)
            return this.stop()
          }
          const isBuilding = to.indexOf(beforeUri) > -1

          // beforeUri = beforeUri.replace(
          //   new RegExp(`${isBuilding ? buildingEmoji : backspacingEmoji}$`, 'gu'),
          //   '',
          // )

          const stepUri = isBuilding
            ? beforeUri.concat(to.charAt(beforeUri.length))
            : beforeUri.slice(0, beforeUri.length - 1)
          if (!once) {
            navigator = to
            if (shouldPushState) {
              history.pushState(null, currentTitle, to)
            }
            once = true
          }
          history.replaceState(
            null,
            currentTitle,
            `${stepUri}${!isBuilding ? backspacingEmoji : buildingEmoji}`,
          )
        }, duration)
      })
    },
    stop() {
      timer = clearInterval(timer) as undefined
      return history.replaceState(null, '', navigator)
    },
    cancel() {
      timer = clearInterval(timer) as undefined
    },
  }
}

export const bindAllLink = (config?: AnimationConfig) => {
  if (isSSR) {
    return
  }
  const instance = animateUriFactory(config)
  const $$links = Array.from(document.querySelectorAll('a'))
  for (const $link of $$links) {
    const destination = $link.getAttribute('href')

    if (
      destination &&
      destination.charAt(0) === '/' &&
      destination.charAt(1) !== '/'
    ) {
      $link.addEventListener('click', (e) => {
        e.preventDefault()
        instance?.start(destination)
      })
    }
  }

  return instance
}
