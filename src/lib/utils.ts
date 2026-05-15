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

// Generates a predictable URL path using category and title
export function generateServicePath(categoryName: string, title: string): string {
  // If category is somehow missing, fallback to 'general'
  const cat = categoryName ? slugify(categoryName) : 'general';
  return `/${cat}/${slugify(title)}`;
}
