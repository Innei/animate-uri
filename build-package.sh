###
# @Author: Innei
# @Date: 2020-08-14 13:36:59
# @LastEditTime: 2020-08-14 13:41:28
# @LastEditors: Innei
# @FilePath: /url-animation/build-package.sh
# @Coding with Love
###
parcel build index.ts --global animateUri --out-dir publish
tsc
rm index.js
mv index.d.ts publish/index.d.ts
