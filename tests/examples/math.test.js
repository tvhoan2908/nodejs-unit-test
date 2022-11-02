const math = require("./math");
const doMath = require("./do-math");

// jest.mock("./math.js");
math.add = jest.fn();

test("calls math.add", () => {
  // doMath.doAdd(1, 2);
  // const addMock = jest.spyOn(math, "add");
  // doMath.doAdd(1, 2);
  // expect(addMock).toHaveBeenCalledWith(1, 2);
  doMath.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
