import { describe, expect, test } from "@jest/globals";
import { sortKeys } from "./";

describe("sortKeys", () => {
  test("basic: number value types", () => {
    const input = { c: 3, b: 2, a: 1 };

    const output = sortKeys(input);

    const expectation = { a: 1, b: 2, c: 3 };
    expect(JSON.stringify(output)).toBe(JSON.stringify(expectation));
  });

  test("basic: multiple value types", () => {
    const input = { c: 3, b: "2", "key-a": {} };

    const output = sortKeys(input);

    const expectation = { b: "2", c: 3, "key-a": {} };
    expect(JSON.stringify(output)).toBe(JSON.stringify(expectation));
  });

  test("nested: true", () => {
    const input = { c: 3, b: 2, a: 1, d: { z: 3, y: 2, x: 1 } };

    const output = sortKeys(input);

    const expectation = { a: 1, b: 2, c: 3, d: { x: 1, y: 2, z: 3 } };
    expect(JSON.stringify(output)).toBe(JSON.stringify(expectation));
  });

  test("nested: false", () => {
    const input = { c: 3, b: 2, a: 1, d: { z: 3, y: 2, x: 1 } };

    const output = sortKeys(input, { nested: false });

    const expectation = { a: 1, b: 2, c: 3, d: { z: 3, y: 2, x: 1 } };
    expect(JSON.stringify(output)).toBe(JSON.stringify(expectation));
  });
});
