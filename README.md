# NgHttpclientProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

详细解说移步：https://editor.csdn.net/md?articleId=117745920


## 1. 本项目实现思路摘要

本项目是Angular8项目，二次封装思路，基于httpClient实现接口统一配置和mock

```javascript
  ng new ng-httpclient-project --minimal
```


## 2. 目录结构说明：

![avatar](https://img-blog.csdnimg.cn/2021060916082538.png)

首先pages目录用于存放业务代码，二级目录product存放产品模块的业务代码。其中product.component.ts： 
 - 引入二次封装的服务并调用，httpClient返回的可观察对象，用subscribe接。
 - getProductList接口，其配置了mock:true，则会拦截并返回productList.json的数据。
 - addProduct接口，在本地没真实接口，代码会走到error，这里alert示意。

其次service目录存放公共服务代码，该项目最精简，只保留了data-http封装代码，以及项目全部的api接口列表文件。
 - api-list 用这一个文件，管理全项目的所有接口，便于维护。
 - data-http  统一处理，二次封装

最后mock用的json文件存在assets目录下。
 - 模拟的productList数据

由于TS的语法问题，还需要在app.module.ts中引入各个服务
 - 本项目为例，需要引入HttpClientModule、dataHttpService、ProductComponent


## 二次封装的方法

1、先判断是否在api-list中存在这个接口。

2、判断该接口mock:true , 则直接用http的get请求，返回mockURL的json数据。

3、处理header，不传则默认加上Authorization，可以各个项目自定义。

4、处理params，因为get、delete请求的url是拼接后的完整URL。

5、返回http请求的结果。

详见具体代码