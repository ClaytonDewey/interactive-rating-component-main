const ratingList = document.querySelector(".number-indicators");
const ratings = ratingList.querySelectorAll(".btn-circle");
const submitButton = document.getElementById("submit");
const feedbackForm = document.getElementById("feedback");
const thankYou = document.getElementById("thank-you");
const ratingMsg = document.querySelector(".rating");
let rated = false;
let rating;

ratingList.addEventListener("keydown", changeRatingFocus);

let ratingFocus = 0;
function changeRatingFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    ratings[ratingFocus].setAttribute("tabindex", -1);

    if (e.keyCode === keydownRight) {
      ratingFocus++;
      if (ratingFocus >= ratings.length) {
        ratingFocus = 0;
      }
    } else if (e.keyCode === keydownLeft) {
      ratingFocus--;
      if (ratingFocus < 0) {
        ratingFocus = ratings.length - 1;
      }
    }

    ratings[ratingFocus].setAttribute("tabindex", 0);
    ratings[ratingFocus].focus();
  }
}

for (let i = 0; i < ratings.length; i++) {
  ratings[i].classList.remove("active");
  ratings[i].onclick = function (event) {
    //remove all active class
    removeClass();
    if (event.target.innerHTML === this.innerHTML) {
      this.classList.add("active");
      this.setAttribute("aria-selected", true);
      rating = i + 1;
      rated = true;
    }
  };
}

function removeClass() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
    ratings[i].setAttribute("aria-selected", false);
  }
}

submitButton.addEventListener("click", () => {
  if (rated) {
    console.log(rating);
    feedbackForm.setAttribute("hidden", true);
    thankYou.removeAttribute("hidden");
    ratingMsg.textContent = `You selected ${rating} out of 5`;
  }
});
