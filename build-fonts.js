'use strict';

import gulp from 'gulp';
import bowerFiles from 'main-bower-files';
import { baseDir, tasks, patterns } from './const';


gulp.task(tasks.FONTS_DIST, () => {

    const patternsFonts = '**/*.{eot,svg,ttf,woff,woff2}';
    let listaFontsBower = bowerFiles(patternsFonts);

    return gulp.src(listaFontsBower.concat(patterns.TEMP.FONTS))
        .pipe(gulp.dest(baseDir.DIST.concat('fonts')));
});
