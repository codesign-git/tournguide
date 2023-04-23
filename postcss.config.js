module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: true,
            gap: true
        }),

        require('postcss-assets')({
            cachebuster: true,
            relative: true,
            loadPaths: ['assets/img/']
        }),
        require('postcss-discard-duplicates'),
        require('postcss-each'),
        require('postcss-for'),
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-nesting'),
        require('postcss-preset-env')({
            stage: 1
        }),
        
        require('postcss-pxtoremorem')(
            defaults = {
                rootValue: 20,
                propList: ['*'],
            }
        ),
        require('postcss-simple-vars')({
            silent: true
        }),
        // require('precss-v8')
        // require('cssnano')({
        //     preset: 'default'
        // })
    ]
}