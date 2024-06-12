document.addEventListener("DOMContentLoaded", function() {
  const courses = document.querySelectorAll(".course-item");
  const filterCategories = document.querySelectorAll(".filter-category");
  const filterStatus = document.querySelectorAll(".filter-status");
  const filterModes = document.querySelectorAll(".filter-mode");
  const clearFiltersBtn = document.getElementById("clear-filters");

  filterCategories.forEach(category => {
    category.addEventListener("change", filterCourses);
  });

  filterStatus.forEach(status => {
    status.addEventListener("change", filterCourses);
  });

  filterModes.forEach(mode => {
    mode.addEventListener("change", filterCourses);
  });

  clearFiltersBtn.addEventListener("click", function() {
    filterCategories.forEach(category => category.checked = false);
    filterStatus.forEach(status => status.checked = false);
    filterModes.forEach(mode => mode.checked = false);
    filterCourses();
  });

  function filterCourses() {
    const selectedCategories = Array.from(filterCategories).filter(c => c.checked).map(c => c.value);
    const selectedStatuses = Array.from(filterStatus).filter(s => s.checked).map(s => s.value);
    const selectedModes = Array.from(filterModes).filter(m => m.checked).map(m => m.value);

    courses.forEach(course => {
      const category = course.querySelector(".category").textContent.trim();
      const status = course.querySelector(".category-estado").textContent.trim();
      const mode = course.querySelector(".category-modalidad").textContent.trim();

      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
      const matchStatus = selectedStatuses.length === 0 || selectedStatuses.includes(status);
      const matchMode = selectedModes.length === 0 || selectedModes.includes(mode);

      if (matchCategory && matchStatus && matchMode) {
        course.parentElement.style.display = "";
      } else {
        course.parentElement.style.display = "none";
      }
    });
  }
});
