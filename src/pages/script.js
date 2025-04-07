// const reviewerList = document.querySelector('.reviewer-list');
// const blockquoteList = document.querySelector('.blockquote-list');
// let scrollAmount = 0;

// function scrollContent() {
//   scrollAmount += 1;
//   if (scrollAmount >= reviewerList.scrollHeight - reviewerList.clientHeight) {
//     scrollAmount = 0;
//   }
//   reviewerList.scrollTop = scrollAmount;
//   blockquoteList.scrollTop = scrollAmount;
// }

// setInterval(scrollContent, 50);

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const testimonialCards = document.querySelector('.testimonial-cards');

leftBtn.addEventListener('click', () => {
  testimonialCards.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  testimonialCards.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});