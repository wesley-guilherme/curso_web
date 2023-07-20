const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
const { appHTML, appIMG } = require('./app')

function servidor(cb)  {
    return gulp.src('build')
        .pipe(webserver({
            port: 8070,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}