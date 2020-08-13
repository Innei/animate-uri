/*
 * @Author: Innei
 * @Date: 2020-08-13 21:44:47
 * @LastEditTime: 2020-08-13 21:56:27
 * @LastEditors: Innei
 * @FilePath: /url-animation/test.js
 * @Coding with Love
 */
import { animateUriFactory } from './publish'

animateUriFactory()
  .create({ duration: 300, shouldPushState: false })
  .start('/hello-world', '/')
