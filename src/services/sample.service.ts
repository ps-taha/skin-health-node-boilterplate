import brandConfig from '../brand-config/lg.json';

const queryThirdParty = () => {
  const sampleData = [{ name: brandConfig.brandName, URL: brandConfig }];
  return sampleData;
};

export default {
  queryThirdParty,
};
