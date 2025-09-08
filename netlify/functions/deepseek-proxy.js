const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // 只允许 POST 请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // 解析前端发送的数据
    const payload = JSON.parse(event.body);
    
    // 使用环境变量中的 API 密钥
    const apiKey = process.env.DEEPSEEK_API_KEY;
    
    // 转发请求到 DeepSeek API
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    
    // 获取响应数据
    const data = await response.json();
    
    // 返回响应给前端
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
