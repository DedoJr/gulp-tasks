'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import { baseDir, tasks, patterns } from './const';

gulp.task(tasks.JS_DIST, () => {
    return gulp.src(patterns.TEMP.JS)
        .pipe(babel({
            presets: ['es2015', 'babili']
        }))
        .pipe(gulp.dest(baseDir.TEMP));
});
