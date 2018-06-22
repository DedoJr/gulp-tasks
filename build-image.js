'use strict';

import gulp from 'gulp';
import htmlMin from "gulp-htmlmin";
import { baseDir, tasks, patterns } from './const';

gulp.task(tasks.HTML_DIST, () => {
    return gulp.src(patterns.TEMP.HTML, { base: baseDir.TEMP })
        .pipe(htmlMin({
            collapseWhitespace: true,
            caseSensitive: true
        }))
        .pipe(gulp.dest(baseDir.TEMP));
});
