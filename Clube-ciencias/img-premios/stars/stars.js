document.addEventListener("DOMContentLoaded", function () {
    setupStarRating(".star1", "rating-value1");
    setupStarRating(".star2", "rating-value2");
    setupStarRating(".star3", "rating-value3");
    setupStarRating(".star4", "rating-value4");
    setupStarRating(".star5", "rating-value5");
    setupStarRating(".star6", "rating-value6");
    setupStarRating(".star7", "rating-value7");
    setupStarRating(".star8", "rating-value8");
    setupStarRating(".star9", "rating-value9");
    setupStarRating(".star10", "rating-value10");    
  });
  
  function setupStarRating(starSelector, ratingValueId) {
    const stars = document.querySelectorAll(starSelector);
    const ratingValue = document.getElementById(ratingValueId);
  
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const rating = parseInt(star.getAttribute("data-rating"));
        ratingValue.innerText = rating;
        stars.forEach((s) => {
          const sRating = parseInt(s.getAttribute("data-rating"));
          if (sRating <= rating) {
            s.classList.add("selected");
          } else {
            s.classList.remove("selected");
          }
        });
      });
    });
  }
  