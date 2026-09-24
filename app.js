const SUITES = [
  "FreightCarrierAPITesting","Lending","Shifts 3p Dashcam Integration","Spender Arrears",
  "Uber Ads","UAIS Thriving Spring Testing Suite","Issuance","Rider3PLTesting",
  "Uber Third Party Support","Uber Pay","3PL Consumer APIs","Eats Marketplace",
  "CitiUpiOnboarding","Family","Financial Services","Shifts 3p Integration",
  "Marketplace Signals","CitiCallbackSuiteTest","Uber Insurance Carrier",
  "SDV Network Observability","Earner Background Check","Others"
];
const list = document.getElementById("suites");
const next = document.getElementById("next");
let selected = null;
const fileIcon = "<svg class=\"doc\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/></svg>";
if (list) {
  SUITES.forEach((name) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.role = "radio";
    btn.setAttribute("aria-checked", "false");
    if (name === "Family") btn.classList.add("is-recommended");
    btn.innerHTML = "<span class=\"radio\"></span><span class=\"name\">" + name + "</span>" + fileIcon;
    btn.addEventListener("click", () => {
      selected = name;
      list.querySelectorAll("button").forEach((b) => b.setAttribute("aria-checked", "false"));
      btn.setAttribute("aria-checked", "true");
      next.disabled = false;
      next.classList.add("enabled");
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}
function show(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}
const enter = document.getElementById("enter-sim");
const toApi = document.getElementById("to-api");
if (enter) enter.addEventListener("click", () => show("view-suites"));
if (toApi) toApi.addEventListener("click", () => show("view-suites"));
if (next) next.addEventListener("click", () => {
  if (selected === "Family") show("view-family");
  else alert(selected + " stays on this list. Pick Family to open the household ride app.");
});
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on"));
    chip.classList.add("on");
  });
});
