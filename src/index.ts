/**
 * Do Nothing
 * @packageDocumentation
 * @module main
 */
import * as Module1 from "./module1";
import * as Module2 from "./module2";

export default function main(): any {
  console.log("do nothing");
  return {
    Module1,
    Module2,
  };
}
