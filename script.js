const cards = document.querySelectorAll("[data-tilt]");

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 18;
    const rotateX = ((offsetY / rect.height) - 0.5) * -18;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
