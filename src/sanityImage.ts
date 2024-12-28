// sanityImage.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanityClient';

// Create a builder for image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
