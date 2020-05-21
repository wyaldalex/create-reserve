function catchErrors(error, displayError) {
  let errorMsg;

  if (error.response) {
    //If response from request to server different from 2xx code
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);
    //For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //Response was made but no response received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    //Some other error happened
    errorMsg = error.message;
    console.error("Error Message", error);
  }
  displayError(errorMsg);
}

export default catchErrors;
