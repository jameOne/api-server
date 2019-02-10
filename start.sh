#!/bin/bash

echo "Compiling typescript..."
tsc

echo "Starting the application..."
node ./bin/www
