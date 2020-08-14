/*
 * @Author: Innei
 * @Date: 2020-08-13 19:55:12
 * @LastEditTime: 2020-08-14 13:43:26
 * @LastEditors: Innei
 * @FilePath: /url-animation/script.ts
 * @Coding with Love
 */
// @ts-check
// import { animateUriFactory } from './publish'

import { animateUriFactory, bindAllLink } from './publish'

animateUriFactory({ duration: 60, shouldPushState: false }).start(
  '/hello-world',
  '/',
)

const instance = bindAllLink()

const $input = document.getElementById('destination') as HTMLInputElement
const $button = document.getElementById('button')

$button!.onclick = (e) => {
  let value = $input.value
  if (value.charAt(0) != '/') {
    value = '/'.concat(value)
  }
  instance.start(value)
}
