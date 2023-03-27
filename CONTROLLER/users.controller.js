exports.readlAllUser = (req, res) => {
  const { requestTime } = req;
  res.json({
    message: "Hello from the route",
    requestTime,
  });
};

exports.createUser = (req, res) => {
  const { requestTime } = req;
  console.log(req.body);
  res.json({
    message: "Hello from the route",
    requestTime,
  });
};

exports.updateUsers = (req, res) => {
  console.log(req);
  const { requestTime } = req;
  res.json({
    message: "Hello from the route",
    requestTime,
  });
};

exports.deleteUsers = (req, res) => {
  console.log(req.params.id);
  const { requestTime } = req;
  res.json({
    message: "Hello from the delete route",
    requestTime,
  });
};

exports.findOneUsers = (req,res) =>{
    console.log(res.params)
    const {requestTime} = req
    res.json({
        message:'Hello fron the get route by id',
        requestTime
    })
}
