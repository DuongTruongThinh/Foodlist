export function layThongTinTuForm() {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value == "loai1";
  let gia = document.getElementById("giaMon").value * 1;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value == "1";
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
    tinhGiaKm: function () {
      return this.gia * (1 - this.khuyenMai / 100);
    },
  };
}
export let showThongTinLenForm = (data) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa, tinhGiaKm } =
    data;
  document.getElementById("imgMonAn").src = hinhMon;
  document.getElementById("spMa").innerText = ma;
  document.getElementById("spTenMon").innerText = ten;
  document.getElementById("spLoaiMon").innerText = loai;
  document.getElementById("spGia").innerText = gia;
  document.getElementById("spKM").innerText = khuyenMai;
  document.getElementById("spGiaKM").innerText = data.tinhGiaKm();
  document.getElementById("spTT").innerText = tinhTrang;
  document.getElementById("pMoTa").innerText = moTa;
};
