// simple tab switcher for Activities
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs-row .tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      panels.forEach(p => {
        p.classList.toggle('active', p.id === 'tab-' + target);
      });
    });
  });
});

window.onload = () => {
  const url = new URL(window.location.href);
  const tab = url.searchParams.get("tab");

  if (tab === "ongoing") {
    openOngoing(); 
  }
};

function openOngoing() {
  document.getElementById("ongoingTab").classList.add("active");
  document.getElementById("completedTab").classList.remove("active");

  document.getElementById("ongoingContent").style.display = "block";
  document.getElementById("completedContent").style.display = "none";
}

