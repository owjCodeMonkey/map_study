var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
    APP_PATH: rootPath + path.sep + 'app',
    RUNTIME_PATH: rootPath + path.sep + 'runtime',
    ROOT_PATH: rootPath,
    RESOURCE_PATH: __dirname,
    env: 'production',
    cluster_on: true //开启 cluster
});

instance.run(true);
