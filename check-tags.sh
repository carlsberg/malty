#!/bin/bash

# Get a list of modified components that have not been tagged
uncommitted_components=$(bit status -s | grep "modified" | grep -v "tagged" | awk '{print $2}')

# If there are any untagged components, display an error message
if [ -n "$uncommitted_components" ]; then
  echo "Error: the following components have been modified but not tagged:"
  echo "$uncommitted_components"
  exit 1
fi