// 改写数组方法
const newProto = Object.create(Array.prototype);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  newProto[method] = function () {
    // 调用原生方法
    Array.prototype[method].apply(this, arguments)
    // 更新视图
    updateView()
  }
})

// 对象监听函数
function observer(data) {
  // 判断是否是数组或对象(函数不考虑)
  if (typeof data !== 'object' || data == null) {
    return data
  }
  // 判断是否是数组，如果是需要改变原型
  if (Array.isArray(data)) {
    data.__proto__ = newProto
  }
  // 给属性设置监听
  for (let key in data) {
    defineReactive(data, key, data[key])
  }
}

// 属性监听函数
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // 设置新值
        // 注意 val 一直在闭包中，设置完之后，get 的就是新的值
        val = newVal
        // 更新视图
        updateView()
        // 深度监听(递归)
        observer(val)
      }
    }
  })

  // 深度监听(递归)
  observer(val)
}

// 更新视图函数
function updateView() {
  console.log('更新视图完成')
}

// 测试
const data = {
  name: 'KokoTa',
  info: {
    city: 'Xiamen'
  },
  arr: [1]
}

observer(data)

data.name = 'Brain'

data.info.city = { name: 'Licheng' }
data.info.city.name = 'Fengze'

data.home = 'Fujian'

data.arr.push(2)