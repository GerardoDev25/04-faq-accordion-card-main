const divQuestions = document.getElementById("query");

const selecQuery = (e) => {
   const paragraph =
      e.target.parentElement.nextSibling.nextElementSibling;

   if (!paragraph) return;
   const icon =
      e.target.parentElement.lastChild.previousElementSibling;

   if (paragraph.classList.contains("no-active")) {
      paragraph.classList.remove("no-active");
      paragraph.classList.add("active");

      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
   } else {
      paragraph.classList.add("no-active");
      paragraph.classList.remove("active");

      icon.classList.add("fa-chevron-up");
      icon.classList.remove("fa-chevron-down");
   }
   e.stopPropagation();
};

divQuestions.addEventListener("click", selecQuery);
