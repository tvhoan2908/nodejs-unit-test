module.exports = {
  mockRequest: (body = null, params = null) => {
    const req = {};
    req.body = body ? body : jest.fn().mockReturnValue(req);
    req.params = params ? params : jest.fn().mockReturnValue(req);
    req.app = jest.fn().mockReturnValue(req);
    req.app.get = jest.fn().mockReturnValue(req);
    return req;
  },
  mockResponse: () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = jest.fn().mockReturnValue(res);
    return res;
  },
  mockNext: () => jest.fn(),
};
