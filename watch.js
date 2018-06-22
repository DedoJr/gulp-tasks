'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import proxy from 'http-proxy-middleware';
import { baseDir, tasks, patterns } from './const';

const proxyBackEnd = proxy('/v1', {
    target: 'http://localhost:8080',
    changeOrigin: true,
    logLevel: 'debug'
});


const browserSyncDevOptions = {
    notify: false,
    ghostMode: false,
    port: 9000,
    server: {
        baseDir: [baseDir.DEV],
        routes: {
            '/bower_components': 'bower_components'
        },
        middleware: [proxyBackEnd]
    }
};

gulp.task(tasks.WATCH, [tasks.WIREDEP, tasks.LESS_TO_CSS_DEV], () => {
    browserSync.init(browserSyncDevOptions);

    let watchs = [];

    watchs = watchs.concat(patterns.DEV.JS);
    watchs = watchs.concat(patterns.DEV.CSS);
    watchs = watchs.concat(patterns.DEV.IMAGES);
    watchs = watchs.concat(patterns.DEV.FONTS);
    watchs = watchs.concat(patterns.DEV.HTML);

    gulp.watch(watchs).on('change', () => {
        browserSync.reload();
    });

    gulp.watch(patterns.BOWER_JSON, [tasks.WIREDEP]);
    gulp.watch(patterns.DEV.LESS, [tasks.LESS_TO_CSS_DEV]);
    gulp.watch(patterns.DEV.JS, [tasks.ESLINT]);
});


gulp.task(tasks.WATCH_DIST, () => {
    let browserSyncOptions = browserSyncDevOptions;
    browserSyncOptions.port = 9001;
    browserSyncOptions.server.baseDir = [baseDir.DIST];

    browserSync.init(browserSyncOptions);
});
