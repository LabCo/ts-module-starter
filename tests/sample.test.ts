import {test} from "../lib"
import "jest"

describe("sample test", () => {

  it("should do something", () => {
    expect( test("foo") ).toEqual("foo")
  })

})