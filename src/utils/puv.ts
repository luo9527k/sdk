export const createHistoryEvent = <T extends keyof History>(type: T) => {
    //获取原始函数
    const origin = history[type]
    //返回一个高阶函数
    return function (this: any) {
        const res = origin.apply(this.arguments)
        //创建一个自定义事件
        const e = new Event(type)
        //派发事件
        window.dispatchEvent(e)
        return res
    }
}
