/*
 * @Author: Innei
 * @Date: 2020-08-13 21:31:23
 * @LastEditTime: 2020-08-13 21:46:59
 * @LastEditors: Innei
 * @FilePath: /url-animation/package.ts
 * @Coding with Love
 */

export const animateUriFactory = () => {
  /**
   * @type {number | null}
   */
  let timer: number | undefined = undefined
  let duration = 100
  let navigator = ''
  let shouldPushState = true
  return {
    /**
     *
     * @param {{duration?: number,shouldPushState?: boolean}}
     */
    create(
      {
        duration,
        shouldPushState,
      }: { duration?: number; shouldPushState?: boolean } = {
        duration: 100,
        shouldPushState: true,
      },
    ) {
      duration = duration ?? 100
      shouldPushState = shouldPushState ?? true
      return {
        start: this.start,
        stop: this.stop,
      }
    },
    /**
     *
     * @param {string} to
     * @param {string | undefined} startWith
     */
    start(to: string, startWith: string | undefined) {
      if (typeof to !== 'string' || to.charAt(0) !== '/') {
        throw new Error('to must start with `/`')
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
          return this.stop()
          // window.removeEventListener('beforeunload', handler)
        }
        const isBuild = to.indexOf(beforeUri) > -1
        const stepUri = isBuild
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
          `${stepUri}${!isBuild ? `🔨👴` : `🍻`}`,
        )
      }, duration)

      // history.replaceState(null, title ?? currentTitle, uri)
    },
    stop() {
      timer = clearInterval(timer) as undefined
      return history.replaceState(null, '', navigator)
    },
  }
}
