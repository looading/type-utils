
/**
 * 通用 class Type
 */
type ClassType<Instance, Arg extends any[]> = new (...arg: Arg) => Instance