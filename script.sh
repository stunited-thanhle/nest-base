#!/bin/bash
#!/usr/bin/env bash
. .env
# if [ -f .env ]; then
#   export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
# fi

run() {
    yarn start:dev
}

up() {
    docker compose up -d
}

clearDb() {
    docker-compose down
    docker rmi $DB_IMAGE
    docker volume rm devplus_be_postgresqldata
}

buildDev() {
    docker build --target development -t $DEVPLUS_DEV_REPO .
    docker push $DEVPLUS_DEV_REPO
}

case "$1" in
    "buildDev")
        buildDev
        ;;
    "up")
        up
        ;;
    "clearDb")
        clearDb
        ;;
    *)
        run
        ;;
esac

# if [ "$1" == "up" ]; then
#     up
# elif [ "$1" == "clearDb" ]; then
#     clearDb
# else
#     run
# fi