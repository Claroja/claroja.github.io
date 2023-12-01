import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,e as r}from"./app-MTzDpLgJ.js";const l={},o=r('<h1 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h1><p>面向切面编程（方面）,不通过修改源代码方式，在主干功能里面添加新功能 类似于Python的装饰器 Spring 框架一般都是基于AspectJ实现AOP操作, AspectJ不是Spring组成部分，独立AOP框架，一般把AspectJ和Spirng框架一起使用，进行AOP操作</p><h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h3><ul><li>有接口情况，使用 JDK 动态代理, 参考设计模式</li><li>没有接口情况，使用 CGLIB 动态代理</li></ul><h3 id="aop术语" tabindex="-1"><a class="header-anchor" href="#aop术语" aria-hidden="true">#</a> AOP术语</h3><ul><li>连接点 可以被代理的方法</li><li>切入点 被代理的方法</li><li>通知 额外添加的功能 <ul><li>前置通知 方法执行前执行</li><li>后置通知 方法执行后执行</li><li>环绕通知 方法执行前后执行</li><li>异常通知 方法抛出异常执行</li><li>最终通知 无论如何都执行</li></ul></li></ul><h3 id="切入点表达式" tabindex="-1"><a class="header-anchor" href="#切入点表达式" aria-hidden="true">#</a> 切入点表达式</h3><p>语法: execution([权限修饰符] [返回类型] [类全路径] <a href="%5B%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8%5D">方法名称</a> )</p><ul><li><code>execution(* claroja.UserDao.add(..))</code> 对 claroja.UserDao 类里面的 add 进行增强</li><li><code>execution(* claroja.UserDao.UserDao.* (..))</code> 对 claroja.UserDao 类里面的所有的方法进行增强</li><li><code>execution(* claroja.UserDao.*.* (..)) </code> 对 claroja.UserDao 包里面所有类，类里面所有方法进行增强</li></ul><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3><p>详细参考代码 Spring/AOP</p>',11),c=[o];function d(t,h){return a(),i("div",null,c)}const u=e(l,[["render",d],["__file","AOP.html.vue"]]);export{u as default};
