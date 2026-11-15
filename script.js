const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const achievementRows = document.querySelectorAll(".achievement-table tbody tr");
const filterStatus = document.querySelector(".filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    achievementRows.forEach((row) => {
      const isVisible = filter === "all" || row.dataset.format === filter;
      row.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    const formatName = filter === "all" ? "all achievements" : `rugby ${filter}`;
    filterStatus.textContent = `Showing ${visibleCount} ${formatName}.`;
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
