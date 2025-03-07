# pngquant-bin ![GitHub Actions Status](https://github.com/imagemin/pngquant-bin/workflows/test/badge.svg?branch=main)

> [`pngquant`](https://github.com/kornelski/pngquant) is a PNG compressor that significantly reduces file sizes by converting images to a more efficient 8-bit PNG format

You probably want [`imagemin-pngquant`](https://github.com/imagemin/imagemin-pngquant) instead.

## Install

```sh
npm install pngquant-bin
```

Make sure you have the correct version of [libimagequant](https://github.com/ImageOptim/libimagequant).

```sh
# via Homebrew for macOS
brew install libimagequant

# via apt-get for Debian distributions
sudo apt-get install libimagequant-dev
```

Compared with the official package, this package supports setting the mirror URL. You can set the download URLs of its binary files in the following two ways:

1. Set the npm config property `imagemin_cdnurl`.

```sh
npm install pngquant-bin --imagemin_cdnurl=https://npmmirror.com/mirrors
```

2. Set the environment variables.

```sh
IMAGEMIN_CDNURL=https://npmmirror.com/mirrors npm install pngquant-bin
```

## Usage

```js
import {execFile} from 'node:child_process';
import pngquant from 'pngquant-bin';

execFile(pngquant, ['-o', 'output.png', 'input.png'], error => {
	console.log('Image minified!');
});
```

## CLI

```sh
npm install --global pngquant-bin
```

```sh
pngquant --help
```

## Updating pre-compiled binaries

The Linux binaries are statically linked so they should work on all Linux distributions. To recompile them:

1. `sudo apt-get install libpng-dev`
2. `./configure CFLAGS=-static && make && cp pngquant pngquant-64`
3. Repeat the above commands, but in a 32-bin docker container started with: docker run -ti -v `pwd`:/source i386/debian:9.3 bash
