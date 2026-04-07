function loadTab(page) {
  const container = document.getElementById("tabContent");

  // Loader
  container.innerHTML = `
    <div class="text-center p-4">
      <div class="spinner-border text-primary"></div>
    </div>
  `;

  fetch(page)
    .then(res => res.text())
    .then(data => {
      setTimeout(() => {
        container.innerHTML = data;
      }, 200); // smooth effect
    })
    .catch(err => console.log(err));
}



// function downloadPDF(file) {
//   const link = document.createElement("a");
//   link.href = file;
//   link.download = file.split("/").pop();
//   link.click();
//   window.open(file, "_blank");
// }

function downloadPDF(file) {
  // Optional loader
  console.log("Downloading...");

  window.open(file, "_blank");
}


// function downloadPDF(file) {
//   window.open(file, "_blank");
// }


// let text = item.textContent.toLowerCase();
function filterSubjects(value) {
  const container = document.getElementById("tabContent");
  if (!container) return;

  const items = container.querySelectorAll(".subject-item");

  value = value.toLowerCase().trim();

  items.forEach(item => {
    let text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "";   // ✅ FIX
    } else {
      item.style.display = "none";
    }
  });
}


function openTab(element, page) {

  // Remove active from all tabs
  let tabs = document.querySelectorAll(".nav-link");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Add active to clicked tab
  element.classList.add("active");

  // Load content
  loadTab(page);
}


