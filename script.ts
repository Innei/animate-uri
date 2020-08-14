/*
 * @Author: Innei
 * @Date: 2020-08-13 19:55:12
 * @LastEditTime: 2020-08-14 14:21:04
 * @LastEditors: Innei
 * @FilePath: /url-animation/script.ts
 * @Coding with Love
 */
// @ts-check
// import { animateUriFactory } from './publish'

import { animateUriFactory, bindAllLink } from './publish'

animateUriFactory({ duration: 60, shouldPushState: false })
  .start('/hello-world', '/')
  .then(() => {
    console.log('ok')
  })

const instance = bindAllLink()

const $input = document.getElementById('destination') as HTMLInputElement
const $button = document.getElementById('button')
const handler = () => {
  let value = $input.value
  if (value.charAt(0) != '/') {
    value = '/'.concat(value)
  }
  instance.start(value)
}
$button!.onclick = handler
$button!.onkeydown = (e) => {
  if (e.key === 'Enter') {
    handler()
  }
}
