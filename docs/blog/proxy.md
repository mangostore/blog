# 代理Proxy和反射Reflect
一个常用于框架、库级别的ES6元编程对象

## Refelect介绍
Refelect对象上的函数是为Promxy准备的，对应Promxy的handler的各个捕获器trap。将Object上属于元编程的函数迁移至Reflect里有利于进一步语言规范化，也修正了原始函数中不合理行为。

1. Reflect.defineProperty 

2. Reflect.getOwnPropertyDescriptor

3. Reflect.deleteProperty

4. Refelect.get 获取对象身上某个属性的值，类似于 target[name]。
``` js
  // Reflect.get(target, propertyKey[, receiver])

  const obj = {
    init: 0,
    get sum() {
      return obj.init + this.a + this.b;
    }
  };
  Reflect.get(obj, 'init'); // 0
  Reflect.get(obj, 'sum', { a: 1, b: 2 }); // 3 可以指定this指向
```

5. Refelect.set 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
``` js
  // Reflect.set(target, propertyKey, value[, receiver])

  var obj = {};
  Reflect.set(obj, "prop", "value"); // true
```

6. Refelect.has 用于检查一个对象是否拥有某个属性，相当于in操作符

7. Reflect.ownKeys

8. Reflect.setPrototypeOf

9. Reflect.getPrototypeOf

10. Reflect.preventExtensions

11. Reflect.isExtensible

12. Reflect.construct

13. Reflect.apply