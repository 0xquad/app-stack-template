#!/bin/sh

if [ ! -w /app ]; then
    echo "error: I can't write to /app! needed to initialize and run projects"
    exit 1
fi

if [ ! -e /app/package.json ]; then
    # no project yet, initialize
    create-react-app /app && rm -fr /app/node_modules /app/package-lock.json
fi
if ! npm list -g react-scripts | grep -q react-scripts; then
    cd /app
    jq '.dependencies|keys[]' < package.json | xargs npm install -g
    jq '.dependencies|keys[]' < package.json | xargs npm link
fi
exec npm start
