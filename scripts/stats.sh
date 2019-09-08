#!/bin/bash
rm -rf ./reports
mkdir ./reports
find . -name '*.stats.html' | xargs -I{} cp {} ./reports