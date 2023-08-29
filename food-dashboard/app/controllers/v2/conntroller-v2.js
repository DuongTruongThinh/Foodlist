const URL_BASE = "https://64e31eb0bac46e480e7834ab.mockapi.io/food";
let renderFoodList = (list) => {
  let contentHTML = "";
  list.forEach((food) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa, tinhGiaKm } =
      food;
    let trString =
      /*html*/
      `<tr>
      <td>${ma}</td>
      <td>${ten}</td>
      <td>${loai}</td>
      <td>${gia}</td>
      <td>${khuyenMai}</td>
      <td>0</td>
      <td>${tinhTrang}</td>
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
      console.log("🚀 ~ file: conntroller-v2.js:29 ~ .then ~ res:", res);
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: conntroller-v2.js:10 ~ fetchFoodList ~ err:",
        err
      );
    });
};
