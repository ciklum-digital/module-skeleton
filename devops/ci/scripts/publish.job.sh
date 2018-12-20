#!/usr/bin/env bash

if [[ -z "${NPM_REGISTRY}" ]] || [[ -z "${NPM_REGISTRY_TOKEN}" ]] ; then
    source ./devops/local/scripts/load-env.sh
fi

docker run \
    -e NPM_REGISTRY \
    -e NPM_REGISTRY_TOKEN \
    -e npm_config_cache=/cache/npm \
    -v npm-cache:/cache/npm \
    -v $PWD:/tmp/src \
    -v "$packageName-$CI_COMMIT_TAG":/tmp/artifacts \
    --name $CI_JOB_ID \
    node:10 /bin/bash -c \
   "
    cd /tmp/src && \
    chown -R $(id -u ${USER}):$(id -g ${USER}) /tmp/artifacts && \
    cp -a /tmp/artifacts/. . && \
    cp ./README.md ./dist && \
    npm config set @ciklum:registry "https://${NPM_REGISTRY}"
    npm config set "//${NPM_REGISTRY}/:_authToken" $NPM_REGISTRY_TOKEN
    npm publish
   "
