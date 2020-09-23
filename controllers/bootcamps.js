//@dessc    Get all bootcamps
//@route    GET /api/va/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show All Bootcamps',
  });
};

//@dessc    Get single bootcamps
//@route    GET /api/va/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `get bootcamp with id: ${req.params.id}`,
  });
};

//@dessc    Create single bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'crete new Bootcamps',
  });
};

//@dessc    Update single bootcamps
//@route    PUT /api/v1/bootcamps
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `update bootcamp with id: ${req.params.id}`,
  });
};

//@dessc    Delete single bootcamps
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete bootcamp with id: ${req.params.id}`,
  });
};
