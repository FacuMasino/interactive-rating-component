const ratingState = document.getElementById("rating-state");
const thankyState = document.getElementById("thanky-state");
const ratesList = Array.from(
  document.getElementById("rates-list").getElementsByTagName("li")
);
const rateResult = document.getElementById("rate-result");

const submit = () => {
  if (!getSelectedRate()) return;
  ratingState.style.display = "none";
  thankyState.style.display = "flex";
  rateResult.innerText = getSelectedRate().innerHTML;
};

const getSelectedRate = () => {
  const selected =
    ratesList.filter((rate) => rate.className === "selected") || null;
  return selected ? selected[0] : null;
};

const selectRate = (element) => {
  if (getSelectedRate()) getSelectedRate().classList.remove("selected");
  element.classList.add("selected");
};

ratesList.forEach((rate) =>
  rate.addEventListener("click", (e) => selectRate(e.target))
);
