const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".reason");
hiddenElements.forEach((el) => observer.observe(el));

const rootElem = document.documentElement;
const githubIconElems = document.getElementsByClassName("github-icon")

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  rootElem.setAttribute("data-theme", "dark");
  for (let i = 0; i < githubIconElems.length; i++) {
    githubIconElems.item(i).setAttribute("data-theme",  "dark")
  }
  document.getElementById("switcher").src = "images/sun.svg";
} else {
  rootElem.setAttribute("data-theme", "light");
  for (let x = 0; x < githubIconElems.length; x++) {
    githubIconElems.item(x).setAttribute("data-theme",  "light")
  }
  document.getElementById("switcher").src = "images/moon.svg";
}

const switchTheme = () => {
  let dataTheme = rootElem.getAttribute("data-theme"),
    newtheme;
  newTheme = dataTheme === "dark" ? "light" : "dark";
  switchIcon = document.getElementById("switcher");
  rootElem.setAttribute("data-theme", newTheme);
  for (let x = 0; x < githubIconElems.length; x++) {
    githubIconElems.item(x).setAttribute("data-theme",  newTheme)
  }
  if (dataTheme === "dark") {
    switcher.src = "images/moon.svg";
  } else {
    switcher.src = "images/sun.svg";
  }
};

document.querySelector("#switcher").addEventListener("click", switchTheme);
feather.replace();