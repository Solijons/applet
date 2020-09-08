const fs = require('fs');
const EOL = require('os').EOL;
const PACKAGE = '../package.json';
const PARENT_PACKAGE = '../../package.json';

const parentPackage = require(PARENT_PACKAGE);
const package = require(PACKAGE);

if (package.version !== parentPackage.version) {
    console.log('Changing package version from', package.version, 'to', parentPackage.version);
    package.version = parentPackage.version;
}

fs.writeFileSync(PACKAGE, JSON.stringify(package, null, 2) + EOL);

