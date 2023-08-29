function layThongTinTuForm() {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa };
}
export { layThongTinTuForm };
