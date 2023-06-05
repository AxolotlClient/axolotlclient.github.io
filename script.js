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

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    rootElem.setAttribute("data-theme", 'dark');
} else {
    rootElem.setAttribute("data-theme", 'light');
}

const switchTheme = () => {
  let dataTheme = rootElem.getAttribute("data-theme"),
    newtheme;

  newTheme = (dataTheme === "dark") ? "light" : "dark";

  rootElem.setAttribute("data-theme", newTheme);
};

document.querySelector("#switcher").addEventListener("click", switchTheme);
