import { layThongTinTuForm, showThongTinLenForm } from "./controller-v1.js";
function themMon() {
  let data = layThongTinTuForm();
  console.log("🚀 ~ file: main-v1.js:4 ~ themMon ~ data:", data);
  showThongTinLenForm(data);
}
window.themMon = themMon;
