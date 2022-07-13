// 接口和页面初始化配置中心
/*原则：
 * 在前置配置之前，需要搞清楚后端微服务前缀路由是什么，然后再配置到该文件下面
 *微服务名称规则为大驼峰命名格式，微服务要保证唯一，多个分支情况下需要进行统一名称进行建立
 * */
const nodeEnv = process.env.VUE_APP_NODE_ENV
const isDevelopment = nodeEnv === 'development'
console.log('当前环境', nodeEnv)

const gateway = nodeEnv === 'development' ? '/services' : '/nbs'

function config() {
  let service = {
    apiUrl: '', // 主域名
  }
  switch (nodeEnv) {
    // 开发, 本地开发走vue代理
    case 'development': {
      service = {
        ...service,
        apiUrl: 'http://81.68.79.231:99/admin',
      }
      break
    }
    // 测试环境
    case 'staging': {
      service = {
        ...service,
        apiUrl: 'http://81.68.79.231:99/admin',
      }
      break
    }
    // 开发联调环境
    case 'sst': {
      service = {
        ...service,
        apiUrl: 'http://81.68.79.231:99/admin',
      }
      break
    }
    // 生产
    case 'production': {
      service = {
        ...service,
        apiUrl: 'http://81.68.79.231:99/admin',
      }
      break
    }
  }

  return service
}

export { nodeEnv, isDevelopment }
export default config
