
declare namespace Tuples {

  /**
   * 获取元组第一个 type 
   */
  type Head<T extends any[]> =
    T extends [infer H, ...any[]]
    ? H
    : T extends (infer H)[]
    ? H
    : never

  /**
   * 获取元组最后一个 type
   */
  type Last<T extends any[]> = T extends [...Pop<T>, infer L] ? L : never

  /**
   * 删除元组第一个 type
   */
  type Shift<T extends any[]> = T extends [any, infer H] ? H : T extends (infer H)[] ? H[] : never

  /**
   * 往元组头部插入一个或者多个 type
   */
  type Unshift<T extends any[], H extends any> = H extends any[] ? [...H, ...T] : [H, ...T]

  /**
   * 往元组尾部插入一个或者多个 type
   */
  type Push<T extends any[], H extends any> = H extends any[] ? [...T, ...H] : [...T, H]

  /**
   * 删除元组最后一个 type
   */
  type Pop<T extends any[]> =  [...T, number] extends [...(infer H), any, number] ? H : never

  /**
   * 合并两个元组（覆盖）
   */
  type Merge<A extends any[], B extends any[]> = A extends (infer U)[] ? (B extends (infer P)[] ? (P | U)[] : never): never
}