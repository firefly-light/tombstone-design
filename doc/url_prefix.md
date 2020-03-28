
# url 前缀


#### url 前缀定义

`[http|https]://domain:port/(xxx)?`


eg: https://google.com


#### 适用范围

前后端分离时, 前端(本项目)编译生成的静态页面 放在 托管服务器, 或者不打算使用 nginx做代理，打算 编译后的资源直接访问后端

> 如果在开发环境，不用搞这个，ant-design 自带的 proxy 就很优秀了，不过 proxy 生产环境不能使用，除非 启动 umi-serve


#### why 

编译生成的静态页面, 访问后端的url默认指向: `localhost:8000`

此时去每个service里面增加 url 的前缀，重复且耗时，不可取


#### 修改地方

 对 `src/utils/request.ts` 进行修改, eg:
 
``` 

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: "http://ip:80/",
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

```
 
当然还能更高级点, 在外层的全局配置定义 url_prefix, 然后在该文件进行引用


> 当 prefix 的值为空字符串时, 就跟默认保持一致了 




#### 参考链接

- [umi-request](https://github.com/umijs/umi-request)

- [build 之后如何使用 mock 数据](https://pro.ant.design/docs/faq-cn)





