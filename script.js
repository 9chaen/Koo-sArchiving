document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.text');
    const dot = document.querySelector('.dot');
    const paragraphs = textContainer.querySelectorAll('p');

    textContainer.addEventListener('click', function() {
        paragraphs.forEach((paragraph, index) => {
            paragraph.style.transform = `translateY(${(index + 1) * 20}px)`; // 그룹으로 아래로 내려가는 애니메이션
            paragraph.style.opacity = 0; // 투명도 설정
        });

        setTimeout(() => {
            dot.style.display = 'block'; // 빨간 작은 원 표시
            dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표에 따라 위치 설정
            dot.style.left = `${event.clientX}px`; // 마우스 X 좌표에 따라 위치 설정
            dot.style.animation = 'slideIn 2s forwards'; // 슬라이딩 애니메이션 설정
        }, 2000);
    });

    document.addEventListener('mousemove', function(event) {
        dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표에 따라 위치 설정
        dot.style.left = `${event.clientX}px`; // 마우스 X 좌표에 따라 위치 설정
    });
});