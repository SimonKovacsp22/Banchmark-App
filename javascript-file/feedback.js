// add colors to stars
let stars = document.querySelectorAll(".singleStar");
//   console.log(stars);
//   let starValue = [];
//   console.log(starValue);
//   let sum = 0;
//   for (let j = 0; j < starValue.length; j++) {
//     sum += starValue[j];
//   }
//   console.log(sum);

for (let i = 0; i < stars.length; i++) {
  const singleStar = stars[i];
  singleStar.addEventListener("click", function (event) {
    //   console.log([i]);
    for (let index = 0; index <= i; index++) {
      stars[index].style.fill = "#00ffff";
      stars[index].style.transition = "1.5s ease-in-out";

      //console.log([index]);
      // starValue.push(index);
    }
  });
}

//   alert("Thank for your " + [starValue + 1] + " stars feedback");
