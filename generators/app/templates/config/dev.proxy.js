// 代理配置文件
module.exports = {
    '*/motor/ugc_activity/v1/**': {
        target: 'http://i.snssdk.com',
        secure: false,
        changeOrigin: true
    }
} 

