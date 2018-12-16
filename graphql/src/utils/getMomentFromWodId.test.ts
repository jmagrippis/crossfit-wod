import moment from "moment";

import { getMomentFromWodId } from "./getMomentFromWodId";

describe("getMomentFromWodId", () => {
  it("returns a moment object with the correct year, month, and day, for the given id", () => {
    const id = 181020;
    const result = getMomentFromWodId(id);

    expect(result.year()).toBe(2018);
    expect(result.month()).toBe(
      moment()
        .month("October")
        .month()
    );
    expect(result.date()).toBe(20);
  });
});
