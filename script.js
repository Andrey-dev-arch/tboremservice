document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "Спасибо! Мы свяжемся с вами в ближайшее время.";
});
document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("requestResponse").textContent = "Заявка отправлена! Мы скоро свяжемся с вами.";
});
