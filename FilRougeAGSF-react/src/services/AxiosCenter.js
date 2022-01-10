import ApiBackEnd from "./ApiBackEnd";
import Axios from "axios";

const AxiosCenter = {
  authenticate(username, password) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);


    return ApiBackEnd({
      method: "post",
      url: "/api/users",
      data: formData,
    });
  }
};

export default AxiosCenter;

/*

AxiosCenter.getCurrentUser().then(response => {
    response ........
}).catch(error => {
    //error.........
})



*/
