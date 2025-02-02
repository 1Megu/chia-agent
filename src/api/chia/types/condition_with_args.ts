import {ConditionOpcode} from "./condition_opcodes";
import {bytes} from "./_python_types_";

export type ConditionWithArgs = {
  opcode: ConditionOpcode;
  vars: bytes[];
};