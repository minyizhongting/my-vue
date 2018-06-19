const Mock = require('mockjs');

// Mock.mock(url, post/get, 返回的数据);
Mock.mock('/api/data', 'get', (req, res) => {   // 请求被mockjs拦截，不会出现在network面板中
    return {
        data: ['a', 'b']
    }
});
