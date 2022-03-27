import { expect } from "chai";
import transform from "../lib/transform";

describe("transform step", () => {
  it("single arg", () => {
    const transformStep = {
      type: "transform",
      data: {
        args: "key"
      }
    }

    expect(transform(transformStep)).to.be.equal(".transform((obj) => _.get(obj, \"key\"))")
  })

  it("single arg json", () => {
    const transformStep = {
      type: "transform",
      data: {
        args: [{"from": "key1", "to": "destination1"}]
      }
    }

    expect(transform(transformStep)).to.be.equal(".transform((obj) => ({destination1: _.get(obj, \"key1\")}))")
  })

  it("multi-arg json", () => {
    const transformStep = {
      type: "transform",
      data: {
        args: [
          {"from": "key1", "to": "destination1"},
          {"from": "key2", "to": "destination2"}
        ]
      }
    }

    expect(transform(transformStep)).to.be.equal(".transform((obj) => ({destination1: _.get(obj, \"key1\"),destination2: _.get(obj, \"key2\")}))")
  })
});

