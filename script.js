// // Ajouter une fonction pour afficher un message de confirmation lorsque le formulaire est soumis
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Merci pour votre message ! Nous vous répondrons dès que possible.");
// });

// // Ajouter une fonction pour animer le scroll vers les sections lorsque les liens de la navigation sont cliqués
// const navLinks = document.querySelectorAll("header nav a");
// navLinks.forEach(function(link) {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();
//         const sectionId = this.getAttribute("href");
//         const section = document.querySelector(sectionId);
//         section.scrollIntoView({ behavior: "smooth" });
//     });
// });


$(document).ready(function() {
    var text = "I am a student in computer science at the Université de Technologie de Compiègne in first year of engineering cycle."
    var length = text.length;
    var i = 0;
  
    setInterval(function() {
        $('#write').append(text[i]);
        i++;
        if (i == length) {
          clearInterval();
        }
      }, 100);
});