const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp'),
    fileInclude = require('gulp-file-include'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    srcUrl = 'src/',
    distUrl = 'dist/'


function includeHtml() {
    return src(srcUrl + 'templates/*.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(distUrl))
}

function images() {
    return src(srcUrl + 'img/**')
        .pipe(newer(distUrl + 'img/**'))
        .pipe(imagemin())
        .pipe(dest(distUrl + 'img/'))
}

function watchFiles() {
    watch(srcUrl + 'templates/**/*.html', includeHtml)
    watch(srcUrl + 'img/**', images)
}

exports.default = watchFiles