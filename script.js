/*
 * @Author: Innei
 * @Date: 2020-08-13 19:55:12
 * @LastEditTime: 2020-08-13 21:30:51
 * @LastEditors: Innei
 * @FilePath: /url-animation/index.js
 * @Coding with Love
 */
// @ts-check
const allHref = [...document.querySelectorAll('a')]

/**
 * @type {number | null}
 */
let timer = null
let once = false
allHref.map(($$) => {
  $$.addEventListener('click', (e) => {
    e.preventDefault()
    const href = $$.getAttribute('href')
    if (href.charAt(0) === '#') {
      if (timer) {
        clearInterval(timer)
      }
      const uri = '/'.concat(href.slice(1, href.length))
      const title = $$.getAttribute('data-title')
      const currentTitle = document.title
      timer = setInterval(() => {
        const beforeUri = encodeURI(
          decodeURI(location.pathname).replace(
            /<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu,
            '',
          ),
        )
        /**
         * @type {string}
         */

        const afterUri = uri

        // const handler = (event) => {
        //   clearInterval(timer)
        //   history.pushState(null, title ?? currentTitle, afterUri)
        //   event.preventDefault()
        //   const msg = '地址正在过度, 现在刷新可能出现问题哦'
        //   event.returnValue = msg
        //   return msg
        // }

        if (beforeUri === afterUri) {
          clearInterval(timer)
          return history.replaceState(null, title ?? currentTitle, afterUri)

          // window.removeEventListener('beforeunload', handler)
        }
        const isBuild = afterUri.indexOf(beforeUri) > -1
        const stepUri = isBuild
          ? beforeUri.concat(afterUri.charAt(beforeUri.length))
          : beforeUri.slice(0, beforeUri.length - 1)

        if (!once) {
          // window.addEventListener('beforeunload', handler)
          history.pushState(null, title ?? currentTitle, afterUri)
        }
        history.replaceState(
          null,
          title ?? currentTitle,
          `${stepUri}${!isBuild ? `🔨👴` : `🍻`}`,
        )

        once = true
      }, 100)

      // history.replaceState(null, title ?? currentTitle, uri)
    }
  })
})

const animateUri = () => {
  /**
   * @type {number | null}
   */
  let timer = null
  return {
    duration: 100,
    navigator: '',
    shouldPushState: true,
    /**
     *
     * @param {{duration?: number,shouldPushState?: boolean}}
     */
    init(
      { duration, shouldPushState } = { duration: 100, shouldPushState: true },
    ) {
      this.duration = duration ?? 100
      this.shouldPushState = shouldPushState ?? true
      return this
    },
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to, startWith) {
      if (typeof to !== 'string' || to.charAt(0) !== '/') {
        throw new Error('to must start with `/`')
      }

      if (timer) {
        clearInterval(timer)
      }
      if (startWith && startWith.charAt(0) === '/') {
        history.replaceState(null, '', startWith)
      }
      let once = false
      const currentTitle = document.title

      timer = setInterval(() => {
        const beforeUri = encodeURI(
          decodeURI(location.pathname).replace(
            /<% emojiSequence %>|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}/gu,
            '',
          ),
        )

        // const handler = (event) => {
        //   clearInterval(timer)
        //   history.pushState(null, title ?? currentTitle, afterUri)
        //   event.preventDefault()
        //   const msg = '地址正在过度, 现在刷新可能出现问题哦'
        //   event.returnValue = msg
        //   return msg
        // }

        if (beforeUri === to) {
          clearInterval(timer)
          return history.replaceState(null, currentTitle, to)

          // window.removeEventListener('beforeunload', handler)
        }
        const isBuild = to.indexOf(beforeUri) > -1
        const stepUri = isBuild
          ? beforeUri.concat(to.charAt(beforeUri.length))
          : beforeUri.slice(0, beforeUri.length - 1)
        if (!once) {
          this.navigator = to
          if (this.shouldPushState) {
            history.pushState(null, currentTitle, to)
          }
          once = true
        }
        history.replaceState(
          null,
          currentTitle,
          `${stepUri}${!isBuild ? `🔨👴` : `🍻`}`,
        )
      }, this.duration)

      // history.replaceState(null, title ?? currentTitle, uri)
    },
    stop() {
      clearInterval(timer)
      return history.replaceState(null, '', this.navigator)
    },
  }
}
// @ts-ignore
window.animationUrl = animateUri
