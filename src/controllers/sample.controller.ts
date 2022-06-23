import services from '../services';

const getSampleData = (req: any, res: any) => {
  const service = services.sampleService;
  const result = service.queryThirdParty();
  res.json({ result });
};

export default getSampleData;
