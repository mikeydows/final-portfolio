  const sidepage = document.getElementById("sidepage");
    const hideBtn = document.getElementById("hideBtn");
    const showBtn = document.getElementById("showBtn");

    function showPage() {
      sidepage.style.display = "block";
    }

    function hidePage() {
      sidepage.style.display = "none";
    }

    showBtn.addEventListener("click", showPage);
    hideBtn.addEventListener("click", hidePage);