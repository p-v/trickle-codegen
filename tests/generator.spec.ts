import { expect } from "chai";
import generator from "../lib/generator";

describe("Generate Trickle", () => {
  it("with perform and transform", () => {
    const steps = [
      {
        type: "perform",
        data: { fn: "myFunc", args: ["x", "y"] },
      },
      {
        type: "transform",
        data: {
          args: [
            { from: "x.y.z", to: "x" },
            { from: "x.y.zx", to: "y" },
          ],
        },
      },
    ];

    expect(generator.generate(steps)).to.be.equal(
      `Trickle.perform(myFunc, ["x","y"]).transform((obj) => {x: _.get(obj, "x.y.z"),y: _.get(obj, "x.y.zx")}).done()`
    );
  });

  it("with perform, transform and validate", () => {
    const steps = [
      {
        type: "perform",
        data: { fn: "myFunc", args: ["x", "y"] },
      },
      {
        type: "transform",
        data: {
          args: [
            { from: "x.y.z", to: "x" },
            { from: "x.y.zx", to: "y" },
          ],
        },
      },
      {
        type: "validate",
        data: {
          args: [
            { inspect: "x", expected: "abc" },
            { inspect: "y", expected: 3 },
          ],
        },
      },
    ];

    expect(generator.generate(steps)).to.be.equal(
      `Trickle.perform(myFunc, ["x","y"]).transform((obj) => {x: _.get(obj, "x.y.z"),y: _.get(obj, "x.y.zx")}).validate((obj) => _.get(obj, "x") === abc && _.get(obj, "y") === 3).done()`
    )
  });
});
