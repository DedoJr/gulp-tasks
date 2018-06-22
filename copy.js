import gulp from 'gulp';
import chMod from 'gulp-chmod';
import { baseDir, tasks } from './const';

gulp.task(tasks.COPY_TEMP, () => {
    return gulp.src(baseDir.DEV.concat('**/*'))
        .pipe(chMod(666))
        .pipe(gulp.dest(baseDir.TEMP));
});
