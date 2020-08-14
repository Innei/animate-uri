###
# @Author: Innei
# @Date: 2020-08-14 13:36:59
# @LastEditTime: 2020-08-14 14:17:43
# @LastEditors: Innei
# @FilePath: /url-animation/build-package.sh
# @Coding with Love
###
parcel build index.ts --global animateUri --out-dir publish
tsc
mv index.js publish/index.esm.js
mv index.d.ts publish/index.d.ts
cp publish/index.d.ts publish/index.esm.d.ts
