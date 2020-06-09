export const pipe = (a, b) => (c) => b(a(c))
// TODO(tothricsaj): learn pipeN technique
export const pipeN = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc(value)))