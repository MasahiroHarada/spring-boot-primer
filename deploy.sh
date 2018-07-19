#!/usr/bin/env sh

# abort on errors
set -e

yarn build

git add -A
git commit -m 'deploy'
git push -f git@github.com:MasahiroHarada/spring-boot-primer.git master
