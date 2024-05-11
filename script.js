document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');
    const dot = document.querySelector('.dot');

    function handleClick(event) {
        paragraphs.forEach((paragraph, index) => {
            paragraph.style.transition = `transform 1s, opacity 1s`; // 애니메이션 속도 설정
            paragraph.style.transform = 'translateY(100px)'; // 아래로 슬라이드
            paragraph.style.opacity = 0; // 투명도 설정
        });
        dot.style.transition = 'opacity 1s, top 1s'; // 애니메이션 속도 설정
        dot.style.opacity = 1; // 투명도 설정
        dot.style.top = '0'; // 화면 상단으로 이동
    }

    function handleMouseMove(event) {
        dot.style.transition = 'top 0.1s, left 0.1s'; // 애니메이션 속도 설정
        dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표로 이동
        dot.style.left = `${event.clientX}px`; // 마우스 X 좌표로 이동
    }

    // <p> 요소의 애니메이션 종료 이벤트를 감지하여 handleClick 함수를 호출합니다.
    document.querySelector('.text').addEventListener('transitionend', handleClick);

    document.addEventListener('mousemove', handleMouseMove); // 마우스 이동 이벤트 리스너 추가
});
