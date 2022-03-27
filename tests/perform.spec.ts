import { expect } from "chai";
import perform from "../lib/perform";

describe("perform step", () => {
  it("with string number and array run successfully", () => {
    const performStep = {
      type: 'perform',
      data: {
        fn: 'callAPI',
        args: ["abc", 1, [3,4]]
      }
    }

    const templ = perform(performStep);
    expect(templ).to.be.equal('.perform(callAPI, ["abc",1,[3,4]])');
  })

  it("with object run successfully", () => {
    const performStep = {
      type: 'perform',
      data: {
        fn: 'callAPI',
        args: [{"abc": 3}]
      }
    }

    const templ = perform(performStep);
    expect(templ).to.be.equal('.perform(callAPI, [{"abc":3}])');
  })

  it("with empty array run successfully", () => {
    const performStep = {
      type: 'perform',
      data: {
        fn: 'callAPI',
        args: []
      }
    }

    const templ = perform(performStep);
    expect(templ).to.be.equal('.perform(callAPI, [])');
  })
})

