import { describe, expect, it } from "vitest";
import { SERVICE_DETAILS, SERVICE_GROUPS, getServiceDetail } from "./services";

describe("service pages", () => {
  it("has no separate shop-renovation detail page; the hub links to /shop-renovation", () => {
    expect(getServiceDetail("shop-renovation")).toBeUndefined();
    const shopGroup = SERVICE_GROUPS.find((g) => g.id === "shop-renovation");
    expect(shopGroup?.links).toEqual([{ label: "Shop renovation", href: "/shop-renovation" }]);
  });

  it("has the nine requested detail pages", () => {
    expect(SERVICE_DETAILS.map((s) => s.slug)).toEqual([
      "electrical",
      "plumbing-toilet-fitting",
      "kitchen",
      "bathroom",
      "flooring",
      "painting-ceilings",
      "carpentry-built-ins",
      "roofing-exterior",
      "design-project-management",
    ]);
  });
});
