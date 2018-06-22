'use strict';

import gulp from 'gulp';
import wiredep from 'wiredep';
import { baseDir, tasks } from './const';

const wiredepStream = wiredep.stream;

const patterns = {
    HTML: baseDir.DEV.concat('index.html')
};

gulp.task(tasks.WIREDEP, () => {
    gulp.src(patterns.HTML)
        .pipe(wiredepStream())
        .pipe(gulp.dest(baseDir.DEV));
});
