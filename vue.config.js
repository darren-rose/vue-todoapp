module.exports = {
    outputDir : 'dist-c',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // mutate config for production...
          console.log('mutate config for production...');
        } else {
          // mutate for development...
          console.log('mutate for development...');
        }
        plugins: [
        ]
      }    
}