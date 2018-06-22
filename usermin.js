'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import useMin from 'gulp-usemin';
import rev from 'gulp-rev';
import htmlMin from "gulp-htmlmin";
import cssMin from 'gulp-clean-css';
import { baseDir, tasks, patterns } from './const';


gulp.task(tasks.USER_MIN, () => {
    return gulp.src(patterns.TEMP.HTML)
        .pipe(useMin({
            cssVendor: [cssMin(), rev()],
            jsVendor: [uglify(), rev()],
            jsMain: [uglify(), rev()],
            jsCore: [uglify(), rev()],
            jsAutenticacao: [uglify(), rev()],
            jsVendas: [uglify(), rev()],
            jsConsultas: [uglify(), rev()],
            jsClientes: [uglify(), rev()],
            jsMinhaEmpresa: [uglify(), rev()],
        }))
        .pipe(gulp.dest(baseDir.DIST));
});
