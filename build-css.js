'use strict';

import gulp from 'gulp';
import cssmin from 'gulp-clean-css';
import { baseDir, tasks, patterns } from './const';

gulp.task(tasks.CSS_DIST, () => {
    return gulp.src(patterns.TEMP.CSS)
        .pipe(cssmin())
        .pipe(gulp.dest(baseDir.TEMP.concat("css")));
});
