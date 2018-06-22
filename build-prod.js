'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import { tasks } from './const';


gulp.task(tasks.BUILD_DIST, () => {
    return new Promise((resolve, reject) => {
        runSequence(
            tasks.CLEAN,
            tasks.WIREDEP,
            tasks.ESLINT,
            tasks.COPY_TEMP,
            tasks.LESS_TO_CSS,
            tasks.HTML_DIST, [
                tasks.IMAGES_DIST,
                tasks.FONTS_DIST,
                tasks.JS_DIST,
                tasks.CSS_DIST
            ],
            tasks.USER_MIN,
            tasks.DEL_TEMP,
            resolve
        )
    });
});
