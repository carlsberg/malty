#!/bin/bash 

echo "Deleting old base images"
rm -rf cypress/snapshots/base/*

echo "Moving actual images to base"
mv cypress/snapshots/actual/* cypress/snapshots/base/

echo "Deleting failed images"
find cypress/snapshots/base -type f -name "*\(failed\)*.png" -exec rm {} +

echo "Congrats, everything was updated, run yarn cypress:run again"