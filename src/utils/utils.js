import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
  return builder.image(source);
}
