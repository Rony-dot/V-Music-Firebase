#!/usr/bin/sh
set -e
yarn run build
cd dist
pwd
git status