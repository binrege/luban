module.exports = {
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                ws: false,
                target: 'http://49.234.68.196:8080/education-portal',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}