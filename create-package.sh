#!/bin/sh
echo "Packaging extention"

zip -r -FS ../link-decoder.zip * --exclude '*.git*'

echo "Package created with name link-decoder.zip"
