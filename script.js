document.querySelector('.text').addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((paragraph, index) => {
        paragraph.style.transition = `transform 1s, opacity 1s`; // 애니메이션 속도 설정
        paragraph.style.transform = 'translateY(100px)'; // 아래로 슬라이드
        paragraph.style.opacity = 0; // 투명도 설정
    });
});

document.addEventListener('mousemove', function(event) {
    const dot = document.querySelector('.dot');
    dot.style.transition = 'top 0.1s, left 0.1s'; // 애니메이션 속도 설정
    dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표로 이동
    dot.style.left = `${event.clientX}px`; // 마우스 X 좌표로 이동
});
