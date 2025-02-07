# HTTP

他：你懂不懂HTTP？
我：懂一点。
他：那你来说说看HTTP是什么。
我：一个协议。
他：然后呢？
我：四个字母组成。
他：你给我出去。

## 特点

1. 简单快速：URI资源固定
2. 灵活：一个协议可以传输不同类型文件
3. 无连接：不会保持持久化连接
4. 无状态：不会保持客户端和服务端的状态

## 报文组成

1. 请求报文：请求行(http方法/页面地址/协议/版本) + 请求头 + 空行 + 请求体
2. 响应报文：状态行(协议/版本/状态码/状态值) + 响应头 + 空行 + 响应体

## 方法

1. GET：获取
2. POST：传输
3. PUT：更新
4. DELETE：删除
5. HEAD：获得首部

## GET与POST的区别

1. 前者回退无害，后者会再次提交请求
2. 前者产生的URL地址可以被收藏，后者不行
3. 前者请求会被浏览器主动缓存，后者需手动设置
4. 前者请求只能进行url编码，后者支持多种编码方式
5. 前者请求参数会被完整保留在浏览器历史纪录里，后者不会
6. 前者在url中传输的参数长度是有限制的，后者没有
7. 前者参数的数据类型只接受ASCⅡ字符，后者没有限制
8. 前者跟后者比起来不安全，因为参数直接暴露在url中
9. 前者参数通过url传递，后者放在请求体中

## 状态码

1xx：指示信息 - 请求已接收，继续处理  
2xx：成功 - 请求已被成功接收  
3xx：重定向 - 要完成请求必须进一步操作  
4xx：客户端错误 - 请求有语法错误或请求无法实现  
5xx：服务器错误 - 服务器未能实现合法的请求

## 状态码示例

200 OK：客户端请求成功  
206 Partial Content：客户端发送带有Range头的GET请求，服务器完成处理，客户端请求成功  
301 Moved Permanently：请求页已转移至新url  
302 Found：请求页已临时转移至新url  
304 Not Modified：客户端有缓存并发送了条件性请求，服务器告诉客户端原来的缓存可以继续使用  
400 Bad Request：客户端请求有语法错误，服务器无法理解  
401 Unauthorized：请求未经授权，此状态码必须和WWW-Authenticate报头域一起使用  
403 Forbidden：请求资源禁止访问  
404 Not Found：请求资源不存在  
500 Internal Server Error：服务器发生位置错误，原来的缓存可继续使用  
503 Server Unavailable：请求未完成，服务器过载或宕机，一段时间后可能恢复正常  
504 Gateway Timeout：网关超时

## 常见头信息

1. Request Headers：
   1. Accept：浏览器可接受的数据格式
   2. Accept-Encoding：浏览器可接受的压缩算法，比如 gzip
   3. Accept-Language：浏览器可接受的语言，比如 zh-CN
   4. Connection：连接指令，比如 keep-alive 表示一次 TCP 连接重复使用
   5. User-Agent：浏览器信息
   6. Content-Type：请求体的格式，比如 application/json
2. Response Headers：
   1. Content-Type：响应体的格式，比如 application/json
   2. Content-Encoding：响应体的压缩算法，比如 gzip
   3. Content-Length：响应体的长度，多少字节
   4. Set-Cookie：设置 cookie

## 请求头判断

![请求头判断](https://qcloudtest-1256171877.cos.ap-guangzhou.myqcloud.com/blog/images/请求头判断.png)

## 持久连接

HTTP采用“请求-应答”模式，普通模式下每次“请求-应答”，客户端和服务器总要新建连接，完成后连接立即断开。但当使用Keep-Alive模式(又称持久连接，协议1.1支持)时，连接就会持续有效，避免了建立或重新建立连接。

## 管线化

### 概念

1. 管线化通过持久连接完成，仅HTTP/1.1支持
2. 只有GET和HEAD可以管线化，POST有所限制
3. 初次连接不应启动管线机制，因为服务器不一定支持HTTP/1.1
4. 管线化不影响响应的顺序
5. HTTP/1.1要求服务端支持管线化，但不要求服务端对响应进行管线化处理，只要求对于管线化的请求不失败
6. 由5可知开启管线化可能不会带来大幅度的性能提升，而且很多服务端和代理程序对管线化的支持并不好，因此现代浏览器如Chrome和Firefox默认不开启管线化支持

### 流程

在使用持久连接的情况下  
正常流程：  
请求1 -> 响应1 -> 请求2 -> 响应2 -> 请求3 -> 响应3  
管线化后(大白话就是“打包”)：  
请求1 -> 请求2 -> 请求3 -> 响应1 -> 响应2 -> 响应3

## Restful 设计

[阮一峰：Restful 设计讲解](http://www.ruanyifeng.com/blog/2011/09/restful.html)

1. 不使用 url 参数

   ```js
   // 传统方式
   // /list?pageNo=1&pageSize=10
   // Restful 方式
   // /list/1/10
   ```
  
2. 使用 method 表示操作类型

    ```js
    // 传统方式
    // POST /user/update-user?id=100
    // Restful 方式
    // PUT /user/100
    ```

## HTTP 和 UDP 的区别

1. HTTP 在应用层
2. TCP/UDP 在传输层

OSI 体系结构：

1. 应用层
2. 表示层
3. 会话层
4. 传输层
5. 网络层
6. 数据链路层
7. 物理层

TCP/IP 体系结构：

1. 应用层(DNS/HTTP/SMTP)
2. 传输层(TCP/UDP)
3. 网际层(IP)
4. 网络接口层

TCP：

1. 有连接(三次握手)
2. 有断开(四次挥手)
3. 稳定传输

UDP：

1. 无连接、无断开
2. 不稳定传输，但是效率高
3. 适合视频会议、语音通话

## HTTP 1.0/1.1/2.0 的区别

1.0：

1. 最基本的 HTTP 协议
2. 支持基本的 GET/POST 方法

1.1：

1. 缓存策略 cache-control/e-tag 等
2. 支持长连接 Connection: keep-alive，一次 TCP 连接重复使用
3. 支持断点续传，状态码 206
4. 支持新的 PUT/DELETE 等，可用于 Restful API

2.0：

1. 可压缩 header，减少体积
2. 多路复用，一次 TCP 连接中可以多个 HTTP 并行请求
3. 服务端推送

## Websocket 是什么

1. 支持端对端通信
2. 可以由 client 发起，也可以由 server 发起
3. 可用于：消息通知、直播间讨论、聊天室、协同编辑

连接过程：

1. 先发起一个 HTTP 请求
2. 成功之后升级到 Websocket 协议，再通讯

WS 和 HTTP 区别：

1. 前者协议名是 `ws://`，可以 `双端` 发起请求
2. 前者没有跨域限制
3. 前者通过 `send` 和 `onMessage` 通讯，后者通过 `req` 和 `res`

其他：

1. ws 可以升级为 wss(类似 https)
2. 实际项目推荐使用 socket.io

WS 和 HTTP 长轮询的区别：

1. 前者是客户端可发起请求，服务端也可发起请求
2. 后者是客户端发起请求，服务端阻塞，不会立即返回
