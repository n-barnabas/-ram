function kiszámol() {
  var aramerosseg = document.getElementById("aramerosseg").value;
  var feszultseg = document.getElementById("feszultseg").value;
  var teljesitmeny = document.getElementById("teljesitmeny").value;
  var ido = document.getElementById("ido").value;
  var i_mertekegy = document.getElementById("i_mertekegy").value;
  var ar_fajta = document.getElementById("ar_fajta").value;
  var fogyasztas;
  var ido2;
  var ar;
  if (teljesitmeny == 0 && feszultseg > 0 && aramerosseg > 0) {
    teljesitmeny = feszultseg * aramerosseg;
  }
  if (aramerosseg == 0 && feszultseg > 0) {
    aramerosseg = teljesitmeny / feszultseg;
  }
  if (feszultseg == 0 && aramerosseg > 0) {
    feszultseg = teljesitmeny / aramerosseg;
  }
  if (i_mertekegy == "h") {
  ido2 = ido * 60 * 60;
  }
  if (i_mertekegy == "p") {
    ido2 = ido * 60;
  }
  if (i_mertekegy == "mp") {
    ido2 = ido;
  }
  if (ar_fajta == "csok") {
    ar = 36.9;
  }
  if (ar_fajta == "piaci") {
    ar = 242;
  }

  fogyasztas = (teljesitmeny * ido2) / 3600000;
  document.getElementById("aramerosseg_ki").innerHTML = aramerosseg + "A";
  document.getElementById("feszultseg_ki").innerHTML = feszultseg + "V";
  document.getElementById("teljesitmeny_ki").innerHTML = teljesitmeny + "W";
  document.getElementById("fogyasztas_ki").innerHTML = fogyasztas + "kwh";
  document.getElementById("ar_ki").innerHTML = ar * fogyasztas + "Ft";



}
function törlés() {
  document.getElementById("aramerosseg_ki").innerHTML = "";
  document.getElementById("feszultseg_ki").innerHTML = "";
  document.getElementById("teljesitmeny_ki").innerHTML = "";
  document.getElementById("fogyasztas_ki").innerHTML = "";
  document.getElementById("ar_ki").innerHTML = "";

}