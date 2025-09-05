export const sendSuccessResponse = (res, data, message = "", status = 200) => {
  res.status(status).json({
    success: true,
    data,
    message,
  });
};


export const sendErrorResponse =(res,data=null,message="",status=500) => {
    res.status(status).json({
        success:false,
        data,
        error:message,
        message
    })
}