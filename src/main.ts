import './style.css';

const card = document.getElementById("card");

const updateCardSize = () => {
  if (document.body.offsetWidth / document.body.offsetHeight > 600 / 851) {
    card!.style.width = "auto";
    card!.style.height = "100%";
  } else {
    card!.style.width = "100%";
    card!.style.height = "auto";
  }
}

updateCardSize();
document.body.onresize = updateCardSize;

setTimeout(() => {
  document.getElementById("loading")!.className = "hidden";
  card!.className = "animate";
}, 3000);
