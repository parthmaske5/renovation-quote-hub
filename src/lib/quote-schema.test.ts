import { describe, expect, it } from "vitest";
import { normalizeMalaysianPhone, quoteStep1 } from "./quote-schema";

describe("Malaysian phone validation", () => {
  it("accepts local 01x mobile numbers and normalises to +60", () => {
    expect(normalizeMalaysianPhone("012-345 6789")).toBe("+60123456789");
    expect(normalizeMalaysianPhone("011-1234 5678")).toBe("+601112345678");
  });

  it("accepts +60 numbers", () => {
    expect(normalizeMalaysianPhone("+60 12 345 6789")).toBe("+60123456789");
    expect(normalizeMalaysianPhone("+60 3 1234 5678")).toBe("+60312345678");
  });

  it("rejects numbers that are not +60 or 01x", () => {
    expect(normalizeMalaysianPhone("0312345678")).toBeNull();
    expect(normalizeMalaysianPhone("+65 9123 4567")).toBeNull();
    expect(normalizeMalaysianPhone("12345")).toBeNull();
    expect(normalizeMalaysianPhone("012-345")).toBeNull();
  });

  it("step 1 requires a valid phone and job type", () => {
    expect(quoteStep1.safeParse({ name: "Ali", phone: "0123456789", jobType: "shop_renovation" }).success).toBe(true);
    expect(quoteStep1.safeParse({ name: "Ali", phone: "999", jobType: "shop_renovation" }).success).toBe(false);
    expect(quoteStep1.safeParse({ name: "Ali", phone: "0123456789", jobType: "garden" }).success).toBe(false);
  });
});
