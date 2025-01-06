const sections = document.querySelectorAll('section');
const headLinks = document.querySelectorAll('.head a');

const Section = {
    home: '#home', 
    resume: '#resume',
    project: '#project',
    skill: '#skill',
    mail: '#mail',
    root: sections,
    threshold: 0.6,
};

const headEffect = (entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`.head a[href="#${entry.target.id}"]`); // section의 id에 맞는 link 찾기

        if (entry.isIntersecting) {
            link.classList.add('active');
            if (entry.target.id === 'project') {
                headLinks.forEach(link => {
                    link.style.color = 'black'; // project 섹션에 들어오면 색상 변경
                });
            } else {
                headLinks.forEach(link => {
                    link.style.color = ''; // 다른 섹션일 때 색상 초기화
                });
            }
        } else {
            link.classList.remove('active');
            link.style.color = ''; // 섹션을 벗어나면 색상 초기화
        }
    });
}

const observer = new IntersectionObserver(headEffect, {
    root: null,
    rootMargin: '0px',
    threshold: Section.threshold
});

// 각 section을 관찰하도록 설정
sections.forEach(section => {
    observer.observe(section);
});
