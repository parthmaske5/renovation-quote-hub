/**
 * Photo registry. Every image on the site is referenced by key from content files,
 * so swapping a placeholder for a real photo is a one-line change here.
 * Set `placeholder: false` once a real photo is in place to hide the
 * "Replace with real project photo" label.
 */
import heroKitchen from "@/assets/photos/hero-finished-kitchen.jpg";
import kitchenBefore from "@/assets/photos/kitchen-before.jpg";
import bathroomAfter from "@/assets/photos/bathroom-after.jpg";
import bathroomBefore from "@/assets/photos/bathroom-before.jpg";
import shopCafeAfter from "@/assets/photos/shop-cafe-after.jpg";
import shopBefore from "@/assets/photos/shop-before.jpg";
import shopRetailAfter from "@/assets/photos/shop-retail-after.jpg";
import shopClinicAfter from "@/assets/photos/shop-clinic-after.jpg";
import electrical from "@/assets/photos/electrical-work.jpg";
import plumbing from "@/assets/photos/plumbing-toilet.jpg";
import flooring from "@/assets/photos/flooring.jpg";
import painting from "@/assets/photos/painting-ceiling.jpg";
import carpentry from "@/assets/photos/carpentry-builtin.jpg";
import roofing from "@/assets/photos/roofing-exterior.jpg";
import design from "@/assets/photos/design-planning.jpg";
import team from "@/assets/photos/team-on-site.jpg";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: boolean;
};

const p = (src: string, alt: string, width = 1200, height = 912): Photo => ({
  src,
  alt,
  width,
  height,
  placeholder: true,
});

export const PHOTOS = {
  heroKitchen: p(
    heroKitchen,
    "Renovated open kitchen and dining area with light oak cabinets and a quartz island",
    1440,
    1088,
  ),
  kitchenBefore: p(kitchenBefore, "Old kitchen before renovation with worn, peeling cabinets"),
  kitchenAfter: p(
    heroKitchen,
    "The same kitchen after renovation with new cabinetry, island and lighting",
    1440,
    1088,
  ),
  bathroomBefore: p(bathroomBefore, "Dated bathroom before renovation with cracked pink tiles"),
  bathroomAfter: p(
    bathroomAfter,
    "Renovated bathroom with large grey tiles, wall-hung toilet and glass shower screen",
  ),
  shopBefore: p(shopBefore, "Empty shop lot before fit-out with bare floor and open ceiling"),
  shopCafeAfter: p(
    shopCafeAfter,
    "Finished café fit-out in a shop lot with timber counter and terrazzo floor",
  ),
  shopRetailAfter: p(
    shopRetailAfter,
    "Finished retail shop with plywood display shelving, counter and polished concrete floor",
  ),
  shopClinicAfter: p(
    shopClinicAfter,
    "Finished clinic reception with timber slat counter, waiting chairs and glass partition",
  ),
  electrical: p(electrical, "Electrician rewiring a home distribution board with new breakers"),
  plumbing: p(plumbing, "Plumber fitting a new toilet and bidet spray hose"),
  flooring: p(flooring, "New large-format porcelain floor tiles being laid in a living room"),
  painting: p(painting, "Painter rolling fresh paint under a new plaster ceiling with cove lighting"),
  carpentry: p(carpentry, "Built-in wardrobe and TV cabinet in light oak finish"),
  roofing: p(roofing, "Terrace house exterior with new roof tiles and fresh exterior paint"),
  design: p(design, "Project lead reviewing floor plans, material samples and a 3D render"),
  team: p(team, "Renovation crew installing a ceiling and cutting timber inside a shop lot"),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
