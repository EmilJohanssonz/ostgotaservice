// JavaScript code for the hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  hamburger.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);
});

// JavaScript code for the img on articles
document.addEventListener('DOMContentLoaded', function () {
  // Funktion för att lägga till bild på klick
  function addImage(articleId, imageContainerId, imgSrc, imgAlt) {
    const article = document.getElementById(articleId);

    if (article) {
      article.addEventListener('click', function () {
        const imageContainer = document.getElementById(imageContainerId);

        if (imageContainer && !imageContainer.querySelector('img')) {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = imgAlt;
          img.style.width = '300px';
          img.style.height = 'auto';

          imageContainer.appendChild(img);
        }
      });
    } else {
      console.error(`Elementet med id '${articleId}' hittades inte.`);
    }
  }

  // Lägg till bild för soffa
  addImage('soffa', 'soffa-image', '/img/soffa2.png', 'Bild på en soffa');

  // Lägg till bild för fåtölj
  addImage('fatolj', 'fatolj-image', '/img/fåtölj.png', 'Bild på en fåtölj');

  // Lägg till bild för säng
  addImage('sang', 'sang-image', '/img/säng.png', 'Bild på en säng');

  addImage('matta', 'matta-image', '/img/matta.png', 'Bild på en matta');

  addImage('utestolar', 'utestolar-image', '/img/utestolar.png', 'Bild på en utestolar');

  addImage('utebord', 'utebord-image', '/img/utebord.png', 'Bild på en utebord');

  addImage('trall', 'trall-image', '/img/trall.png', 'Bild på en trall');

  addImage('ugn', 'ugn-image', '/img/ung.png', 'Bild på en ugn');

  addImage('kamin', 'kamin-image', '/img/kamin.png', 'Bild på en kamin');

  addImage('ogras', 'ogras-image', '/img/ogräs.png', 'Bild på en ogra');

  addImage('snow', 'snow-image', '/img/sno.png', 'Bild på en snöskottning');
});
