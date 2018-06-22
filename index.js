'use strict';

import gulp from 'gulp';
import { tasks } from './const';

const dafaultTask = 'default';

gulp.task(dafaultTask, [tasks.WATCH]);
