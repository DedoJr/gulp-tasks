'use strict';

export const baseDir = {
    ROOT: './',
    DEV: './src/',
    TEMP: './.tmp/',
    DIST: './dist/'
}

export const tasks = {
    ESLINT: 'eslint',
    JS_DIST: 'js:dist',
    DEL_TEMP: 'del:temp',
    DEL_DIST: 'del:dist',
    CSS_DIST: 'css:dist',
    COPY_TEMP: 'copy:temp',
    HTML_DIST: 'html:dist',
    BUILD_DIST: 'build:dist',
    FONTS_DIST: 'fonts:dist',
    IMAGES_DIST: 'images:dist',
    LESS_TO_CSS: 'less_to_css:dist',
    CLEAN_CSS_DEV: 'clean_css:dev',
    LESS_TO_CSS_DEV: 'less_to_css:dev',

    WATCH: 'watch',
    WATCH_DIST: 'watch:dist',
    CLEAN: 'clean',
    RELOAD: 'reload',
    TEST: 'unit_test',
    WIREDEP: 'wiredep',
    COVERAGE: 'coverage',
    USER_MIN: 'usermin:dist'
}

export const patterns = {
    BOWER_JSON: [baseDir.ROOT.concat('bower.json')],
    TEMP: {
        JS: [baseDir.TEMP.concat('**/*.js'), '!'.concat(baseDir.TEMP).concat('**/*.spec.js'), '!'.concat(baseDir.DEV).concat("bower_components/**/*")],
        CSS: [baseDir.TEMP.concat('css/**/*.css')],
        LESS: [baseDir.TEMP.concat('less/**/*.less'), baseDir.TEMP.concat('app/**/*.less')],
        IMAGES: [baseDir.TEMP.concat('images/**/*')],
        FONTS: [baseDir.TEMP.concat('fonts/**/*.{eot,svg,ttf,woff,woff2}')],
        HTML: [baseDir.TEMP.concat('**/*.html'), '!'.concat(baseDir.TEMP).concat('bower_components/**/*.html')],
    },
    DEV: {
        JS: [baseDir.DEV.concat('**/*.js'), '!'.concat(baseDir.DEV).concat('**/*.spec.js'), '!'.concat(baseDir.DEV).concat("bower_components/**/*")],
        CSS: [baseDir.DEV.concat('css/**/*.css')],
        LESS: [baseDir.DEV.concat('less/**/*.less'), baseDir.DEV.concat('app/**/*.less')],
        IMAGES: [baseDir.DEV.concat('images/**/*')],
        FONTS: [baseDir.DEV.concat('fonts/**/*.{eot,svg,ttf,woff,woff2}')],
        HTML: [baseDir.DEV.concat('**/*.html'), '!'.concat(baseDir.DEV).concat('bower_components/**/*.html')],
    }
}
