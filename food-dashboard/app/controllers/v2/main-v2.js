import {
  URL_BASE,
  fetchFoodList,
  showMessage,
  showThongTinForm,
} from "./conntroller-v2.js";
import { layThongTinTuForm } from "../v1/controller-v1.js";

fetchFoodList();
let deleteFood = (id) => {
  axios
    .delete(`${URL_BASE}/${id}`)
    .then((res) => {
      fetchFoodList();
      showMessage("Xóa thành công");
    })
    .catch((err) => {
      showMessage("Xóa thất bại, đã có lỗi xảy ra", false);
    });
};
window.deleteFood = deleteFood;
let addFood = () => {
  let data = layThongTinTuForm();
  axios
    .post(URL_BASE, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fetchFoodList();
      showMessage("Xóa thành công");
    })
    .catch((err) => {
      $("#exampleModal").Modal("hide");
      showMessage("Xóa thất bại, đã có lỗi xảy ra", false);
    });
};
window.addFood = addFood;
window.editFood = (id) => {
  $("#exampleModal").modal("show");
  document.getElementById("foodID").readOnly = true;
  axios
    .get(`${URL_BASE}/${id}`)
    .then((res) => {
      console.log(res);
      showThongTinForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
window.updateFood = () => {
  let data = layThongTinTuForm();
  axios
    .put(`${URL_BASE}/${data.ma}`, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fetchFoodList();
      showMessage("Update thành công");
    })
    .catch((err) => {
      $("#exampleModal").Modal("hide");
      showMessage("Update thất bại, đã có lỗi xảy ra", false);
    });
};
