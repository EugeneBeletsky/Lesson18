module.exports = {
    diff: true,
    extension: ['js'],
    package: './package.json',
    reporter: 'landing',
    slow: 75,
    timeout: 20000,
    ui: 'bdd',
    "watch-files": ['./test/*.test.js'],
};