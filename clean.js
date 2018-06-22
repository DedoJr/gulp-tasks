'use strict';

import gulp from 'gulp';
import util from 'gulp-util';
import del from 'del';
import { baseDir, tasks } from './const';

gulp.task(tasks.CLEAN, () => {
    return del([baseDir.DIST, baseDir.TEMP]).then(paths => {
        paths.forEach(path => util.log('clean: ', util.colors.green('✔ '), path));
    });
});

gulp.task(tasks.DEL_DIST, () => {
    return del([baseDir.DIST]).then(paths => {
        paths.forEach(path => util.log('clean: ', util.colors.green('✔ '), path));
    });
});

gulp.task(tasks.DEL_TEMP, () => {
    return del([baseDir.TEMP]).then(paths => {
        paths.forEach(path => util.log('clean: ', util.colors.green('✔ '), path));
    });
});
