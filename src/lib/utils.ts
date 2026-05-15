export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // separate accent from letter
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/&/g, '-and-') // replace & with 'and'
    .replace(/[^\w\-]+/g, '') // remove all non-word characters
    .replace(/\-\-+/g, '-'); // replace multiple - with single -
}

// Generates a predictable URL slug using the UUID and the title
export function generateServiceSlug(id: string, title: string): string {
  return `${id}-${slugify(title)}`;
}

// Extracts the ID from the slug
export function extractIdFromSlug(slug: string): string {
  // Assuming the UUID is always the first 36 characters
  return slug.substring(0, 36);
}
