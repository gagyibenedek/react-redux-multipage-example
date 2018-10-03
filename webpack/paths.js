const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    outputPath: path.resolve(__dirname, '../', 'build'),
    schedulerEntryPath: path.resolve(
        __dirname,
        '../',
        'src/schedulerIndex.jsx',
    ),
    calendarEntryPath: path.resolve(__dirname, '../', 'src/calendarIndex.jsx'),
    indexPath: path.resolve(__dirname, '../', 'index.html'),
    calendarPath: path.resolve(__dirname, '../', 'src/calendar.html'),
    prospectPath: path.resolve(__dirname, '../', 'src/scheduler.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
};
