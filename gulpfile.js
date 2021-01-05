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
    return src(srcUrl + 'static/img/**')
        .pipe(newer(distUrl + 'static/img/**'))
        .pipe(imagemin())
        .pipe(dest(distUrl + 'static/img/'))
}

function watchFiles() {
    watch(srcUrl + 'templates/**/*.html', includeHtml)
    watch(srcUrl + 'static/img/**', images)
}

exports.default = watchFiles
exports.imgMin = images