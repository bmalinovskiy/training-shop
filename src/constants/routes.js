const ROUTES = {
  root: '/training-shop',
  aboutUs: '/about',
  women: '/women',
  men: '/men',
  beauty: '/beauty',
  accessories: '/accessories',
  blog: '/blog',
  contact: '/contact',
};

export const mainPath = ROUTES.root;
export const aboutUsPath = `${ROUTES.root}${ROUTES.aboutUs}`;
export const womenProductsPath = `${ROUTES.root}${ROUTES.women}`;
export const menProductsPath = `${ROUTES.root}${ROUTES.men}`;
export const beautyPath = `${ROUTES.root}${ROUTES.beauty}`;
export const accessoriesPath = `${ROUTES.root}${ROUTES.accessories}`;
export const blogPath = `${ROUTES.root}${ROUTES.blog}`;
export const contactPath = `${ROUTES.root}${ROUTES.contact}`;
