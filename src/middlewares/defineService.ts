const defineService = (req: any, res: any, next: Function) => {
  req.service = '';
  const brand = req.query.brandname;
  if (brand) {
    req.service = 'sample';
  }
  return next();
};

export default defineService;
