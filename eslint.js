'use strict';

import gulp from 'gulp';
import esLint from 'gulp-eslint';

import { baseDir, patterns, tasks } from './const';

gulp.task(tasks.ESLINT, () => {
    return gulp.src(patterns.TEMP.JS)
        .pipe(esLint({ fix: true }))
        .pipe(esLint.format());
});
