#!/bin/sh

cd ..

mkdir package
mv configuration/Global specs/
mv specs package/
mv package/specs package/spec
mv content package/
mv static package/
mv bw-portal.APIMATIC-BUILD.json package/bw-portal.APIMATIC-BUILD.json
zip -r package.zip package
curl titan.apimatic.io/api/build -F 'file=@package.zip' -o portal.zip
mkdir portal
unzip -o portal.zip -d portal
if [ ! -f portal/index.html ]; then
    echo "Docsite failed to generate"
    exit 1
fi

if [ "$1" = "server" ]; then
    http-server ./portal -c-1 #disable caching since this page will probably be reloaded frequently
fi