export const URL_BASE = "https://64e31eb0bac46e480e7834ab.mockapi.io/food";
const MON_CHAY = true;
const CON_MON = true;
let renderFoodList = (list) => {
  let contentHTML = "";
  list.reverse().forEach((food) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa, tinhGiaKm } =
      food;
    let trString =
      /*html*/
      `<tr>
      <td>${ma}</td>
      <td>${ten}</td>
      <td>${
        loai == MON_CHAY
          ? "<h6 class='text-success'>Chay</h6>"
          : "<h6 class='text-danger'>Mặn</h6>"
      }</td>
      <td>${gia}</td>
      <td>${khuyenMai}</td>
      <td>0</td>
      <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
      <td>      <button class="btn btn-info" onclick='editFood(${ma})'>Sửa</button>
      <button onclick='deleteFood(${ma})' class="btn btn-warning">Xóa</button></td>
      </tr>`;
    contentHTML += trString;
  });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

export let fetchFoodList = () => {
  axios({
    url: URL_BASE,
    method: "GET",
  })
    .then((res) => {
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: conntroller-v2.js:10 ~ fetchFoodList ~ err:",
        err
      );
    });
};
export let showMessage = (message, isSuccess = true) => {
  Toastify({
    text: message,
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};
export let showThongTinForm = (food) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa } = food;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == MON_CHAY ? "loai1" : "loai2";
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value = tinhTrang ? "1" : "0";
  document.getElementById("hinhMon").value = hinhMon;
  document.getElementById("moTa").value = moTa;
};
