gsap.registerPlugin(ScrollTrigger);

// home-title-comment 텍스트 애니메이션
gsap.from(".home-title-comment h1", {
  scrollTrigger: {
    trigger: ".home-title-comment h1",
    start: "top 60%",  // 화면 상단에서 60% 지점에서 애니메이션 시작
    end: "top 30%",    // 화면 상단에서 30% 지점에서 애니메이션 종료
  },
  opacity: 0,
  y: -50,
  duration: 2,
  ease: "power2.out"
});

gsap.from(".home-title-comment h3", {
  scrollTrigger: {
    trigger: ".home-title-comment h3",
    start: "top 60%",
    end: "top 30%",
  },
  opacity: 0,
  x: -50,
  duration: 2,
  ease: "power2.out"
});

gsap.from(".home-title-comment h2", {
  scrollTrigger: {
    trigger: ".home-title-comment h2",
    start: "top 60%",
    end: "top 30%",
  },
  opacity: 0,
  x: 50,
  duration: 1.5,
  ease: "power2.out"
});

// circle-ani-mini 애니메이션
gsap.fromTo(".circle-ani-mini span", {
  opacity: 0,
  scale: 0
}, {
  scrollTrigger: {
    trigger: ".circle-ani-mini",
    start: "top 60%",
    end: "top 30%",
  },
  opacity: 1,
  scale: 1,
  duration: 2,
  stagger: 0.2,
  ease: "power2.out"
});

// profile-img 이미지 애니메이션
gsap.from(".profile-img img", {
  scrollTrigger: {
    trigger: ".profile-img",
    start: "top 60%",
    end: "top 30%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 2.5,
  ease: "power3.out"
});
const items = {
    item1: '#item01',
    item2: '#item02',
    item3: '#item03',
};


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.content_item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%', // 각 요소가 화면 상단 80% 지점에 도달했을 때 시작
            end: 'top 30%',  // 화면 상단 30% 지점에서 종료
            scrub: 1,        // 스크롤 동기화로 자연스러운 동작
        },
        opacity: 0,      // 투명도 0에서 시작
        y: 100,          // 아래에서 위로 이동
        rotation: 30,    // 30도 회전하면서 나타남
        duration: 1.5,   // 애니메이션 지속 시간
        ease: "power3.out", // 부드러운 감속 효과
        delay: index * 0.5 // 각 요소에 0.3초 간격으로 지연 추가
    });
});

