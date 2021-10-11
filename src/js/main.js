import '../local_modules/jquery/dist/jquery.min';
import {
  Chart,
} from '../local_modules/chart.js/dist/chart.min.js';


$(document).ready(() => {

  // for TCGplayer Prices chart text, so that with different screen sizes there is a text of the required size

  let label;
  const screenWidth = window.innerWidth;
  if (screenWidth < 780) {
    label = [`Market Price (Rare)`, `High Price (Rare)`, `Mid Price (Rare)`, `Low Price (Rare)`];
  } else {
    label = [`Release Special Booster Market Price (Rare)`, `Release Special Booster High Price (Rare)`, `Release Special Booster Mid Price (Rare)`, `Release Special Booster Low Price (Rare)`];
  }

  // CHARTS
  // Charts into index.html

  if (document.getElementById(`chart-level`)) {
    const ctxLevel = document.getElementById(`chart-level`);
    const ctxType = document.getElementById(`chart-type`);

    // Chart Level Curve

    const chartLevel = new Chart(ctxLevel, {
      type: `bar`,
      data: {
        labels: [`Level 1`, `Level 2`, `Level 3`, `Level 4`],
        datasets: [{
          label: `Level Curve`,
          data: [13, 11, 8, 6],
          backgroundColor: [
            `#6356A5`,
            `#57CCA1`,
            `#DD7A73`,
            `#509C9F`,
          ],
          borderRadius: 8,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });

    // Chart Type Breakdown

    const chartType = new Chart(ctxType, {
      type: `bar`,
      data: {
        labels: [`Digimon`, `Option`, `Tamer`],
        datasets: [{
          label: `Type Breakdown`,
          data: [38, 4, 8],
          backgroundColor: [
            `#6356A5`,
            `#57CCA1`,
            `#DD7A73`,
          ],
          borderRadius: 8,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }

  // Chart Card Price

  if (document.getElementById(`chart-price`)) {
    const ctxPrice = document.getElementById(`chart-price`);
    const chartPrice = new Chart(ctxPrice, {
      type: `bar`,
      data: {
        labels: label,
        datasets: [{
          axis: `y`,
          label: `Card Price`,
          data: [5, 15, 8, 4],
          backgroundColor: [
            `#58C3F8`,
            `#EAB88D`,
            `#EFD5AA`,
            `#7E8F75`,
          ],
          borderRadius: 8,
        }]
      },
      options: {
        plugins: {
          title: {
            display: false,
            color: `red`,
            text: `Custom Chart Title`,
          }
        },
        indexAxis: `y`,
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // sidebar menu mobile

  const headerButton = document.querySelector(`.header__menu-button`);
  headerButton.addEventListener(`click`, openMobileMenu);
  const mobileDropDownButton = document.querySelector(`.header__list-mobile`);
  mobileDropDownButton.addEventListener(`click`, openMobileDropDown);

  // sidebar close-click outside the sidebar
  function outCloseMobileMenu(event) {
    if (event.target.className.indexOf(`header`) === -1) {
      document.querySelector(`.header__list-mobile`).classList.toggle(`open`);
      document.querySelector(`.header__menu-icon`).classList.toggle(`open`);
      document.querySelector(`.header__cross`).classList.toggle(`open`);
      document.removeEventListener(`click`, outCloseMobileMenu);
    }
  }

  function openMobileMenu() {
    document.addEventListener(`click`, outCloseMobileMenu);
    document.querySelector(`.header__list-mobile`).classList.toggle(`open`);
    document.querySelector(`.header__menu-icon`).classList.toggle(`open`);
    document.querySelector(`.header__cross`).classList.toggle(`open`);
    document.querySelector(`.header__arrow-down`).classList.toggle(`openArrow`);
  }

  function openMobileDropDown(event) {
    if (!!event.target.closest(`li`)) {
      event.target.closest(`li`).children[1].classList.toggle(`open`);
      if (event.target.closest(`li`).children[0].children[0].closest(`svg`)) {
        event.target.closest(`li`).children[0].children[1].classList.toggle(`open`);
        event.target.closest(`li`).children[0].children[2].classList.toggle(`open`);
        event.target.closest(`li`).children[0].children[3].classList.toggle(`open`);
      } else {
        event.target.closest(`li`).children[0].children[0].classList.toggle(`open`);
        event.target.closest(`li`).children[0].children[1].classList.toggle(`open`);
        event.target.closest(`li`).children[0].children[2].classList.toggle(`open`);
      }
    }
  }
});
