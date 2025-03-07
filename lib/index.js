import fs from 'node:fs';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import BinWrapper from 'bin-wrapper';

const CDN_URL = process.env.IMAGEMIN_CDNURL ||
	process.env.npm_config_imagemin_cdnurl ||
	'https://raw.githubusercontent.com/imagemin';

const package_ = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url)));
const url = `${CDN_URL}/pngquant-bin/v${package_.version}/vendor/`;

const binaryWrapper = new BinWrapper()
	.src(`${url}macos/pngquant`, 'darwin')
	.src(`${url}linux/x86/pngquant`, 'linux', 'x86')
	.src(`${url}linux/x64/pngquant`, 'linux', 'x64')
	.src(`${url}freebsd/x64/pngquant`, 'freebsd', 'x64')
	.src(`${url}win/pngquant.exe`, 'win32')
	.dest(fileURLToPath(new URL('../vendor', import.meta.url)))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');

export default binaryWrapper;
