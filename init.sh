#!/usr/bin/env sh

file=.env
npm i

touch $file

echo "SKIP_PREFLIGHT_CHECK=true" >> $file