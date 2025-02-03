const sections = document.querySelectorAll("section");
const headLinks = document.querySelectorAll(".head a");
const projectSection = document.querySelector(".project");
const contactSection = document.querySelector(".send-mail");

const Section = {
  home: "#home",
  resume: "#resume",
  project: "#project",
  skill: "#skill",
  mail: "#mail",
  root: sections,
  threshold: 0.5,
};

const headEffect = (entries) => {
  entries.forEach((entry) => {
    const link = document.querySelector(`.head a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      link.classList.add("active");

      // 프로젝트 섹션에서 색상 변경 (한 번만 실행)
      if (entry.target.id === "project") {
        headLinks.forEach((link) => {
          link.style.color = "black";
        });
        if (!projectSection.classList.contains("active")) {
          projectSection.classList.add("active");
        }
      } else {
        headLinks.forEach((link) => {
          link.style.color = "";
        });
      }

      // 메일 섹션 애니메이션 (한 번만 실행)
      if (entry.target.id === "mail" && !contactSection.dataset.animated) {
        contactSection.classList.add("active");
        contactSection.dataset.animated = "true"; // 애니메이션이 한 번만 실행되도록 설정
      }
    } else {
      link.classList.remove("active");
      link.style.color = ""; // 색상 초기화
    }
  });
};

const observer = new IntersectionObserver(headEffect, {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: Section.threshold,
});

// 각 section을 관찰하도록 설정
sections.forEach((section) => {
  observer.observe(section);
});
