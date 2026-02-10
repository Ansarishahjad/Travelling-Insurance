const navbar = document.getElementById("mainNavbar");
const logo = document.getElementById("navbarLogo");

const defaultLogo = "Image/logo.png";
const activeLogo  = "Image/logo 2.png";

/* ===== Navbar background + logo ONLY FOR DESKTOP ===== */
document.querySelectorAll('.nav-item.dropdown.position-static')
.forEach(drop => {

  drop.addEventListener('show.bs.dropdown', () => {
    if (window.innerWidth > 991) {
      navbar.classList.add('dropdown-active');
      logo.src = activeLogo;
    }
  });

  drop.addEventListener('hide.bs.dropdown', () => {
    if (window.innerWidth > 991) {
      navbar.classList.remove('dropdown-active');
      logo.src = defaultLogo;
    }
  });

});

/* ===== ACTIVE MENU LOGIC (FIXED) ===== */
document.querySelectorAll('.nav-link').forEach(link => {

  link.addEventListener('click', function () {

    // sab se active hatao
    document.querySelectorAll('.nav-link')
      .forEach(l => l.classList.remove('active'));

    // jis par click wahi red
    this.classList.add('active');

  });

});

/* ===== CRITICAL FIX – Dropdown click propagation stop ===== */
document.querySelectorAll('.dropdown-menu').forEach(menu => {

  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

});

/* ===== MOBILE MENU FIX ===== */
const menu = document.getElementById("menu");

menu.addEventListener('show.bs.collapse', () => {
  navbar.classList.remove('dropdown-active');
  logo.src = defaultLogo;
});


  // ************Form************
  
  const dropdown = document.getElementById("countryDropdown");
  const input = document.getElementById("countryInput");
  const selectedBox = document.getElementById("selectedCountries");
  const selectedSet = new Set();

  function showCountries() {
    dropdown.style.display = "block";
  }

  function filterCountries() {
    const val = input.value.toLowerCase();
    document.querySelectorAll(".country-item").forEach(item => {
      item.style.display = item.innerText.toLowerCase().includes(val)
        ? "block"
        : "none";
    });
  }

  document.querySelectorAll(".country-item").forEach(item => {
    item.onclick = () => {
      const country = item.innerText;

      if (!selectedSet.has(country)) {
        selectedSet.add(country);

        const chip = document.createElement("div");
        chip.className = "country-chip";
        chip.innerHTML = `${country} <span>&times;</span>`;

        chip.querySelector("span").onclick = () => {
          selectedSet.delete(country);
          chip.remove();
        };

        selectedBox.appendChild(chip);
      }

      input.value = "";
      dropdown.style.display = "none";
    };
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".custom-input")) {
      dropdown.style.display = "none";
    }
  });

  // Trip toggle
  document.querySelectorAll(".trip-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".trip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };
  });


//Calender//

flatpickr(".datepicker", {
  dateFormat: "d/m/Y",
  allowInput: true,
  position: "right center"
});


  // Add age inputs
  document.querySelector(".add-age").addEventListener("click", function (e) {
  e.preventDefault();

  const input = document.createElement("input");
  input.type = "number";
  input.className = "form-control age-box";

  const wrapper = document.getElementById("ageWrapper");
  const addBtn = wrapper.querySelector(".add-age");

  // + button se pehle insert hoga (left side)
  wrapper.insertBefore(input, addBtn);
});


