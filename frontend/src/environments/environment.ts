export const environment = {
  production: true,
  // Same-origin in Produktion (siehe docs/adr/0002-single-origin-deployment.md):
  // NestJS liefert Frontend und API vom selben Host, daher relativer Pfad.
  nestUrl: '/api/v1',
};
