/**
 * module with re-export index with multiple files with single function export
 * @packageDocumentation
 * @module module4
 */
export * from "./submodule";

export function module4FunctionA(): void {
  console.log("do nothing");
}

export function module4FunctionB(): void {
  console.log("do nothing");
}
