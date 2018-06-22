'use strict';

import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';
import concat from 'gulp-concat';
import { baseDir, tasks, patterns } from './const';

gulp.task(tasks.LESS_TO_CSS, () => {

    const lessOptions = {
        fileBase: baseDir.TEMP.concat('less/shopup.less'),
        outDir: baseDir.TEMP.concat("css")
    }

    return gulp.src(lessOptions.fileBase)
        .pipe(less())
        .on("error", (err) => {
            console.log(err);
        })
        .pipe(concat('shopup.css'))
        .pipe(gulp.dest(lessOptions.outDir))
});

gulp.task(tasks.LESS_TO_CSS_DEV, () => {

    const lessDevOptions = {
        fileBase: baseDir.DEV.concat('less/shopup.less'),
        outDir: baseDir.DEV.concat("css")
    }

    gulp.src(lessDevOptions.fileBase)
        .pipe(less())
        .on("error", (err) => {
            console.log(err);
        })
        .pipe(concat('shopup.css'))
        .pipe(gulp.dest(lessDevOptions.outDir))
});
