document.addEventListener("DOMContentLoaded", function() {
    let isFirstClick = true; // 첫 번째 클릭 여부를 나타내는 변수 추가
    let isSecondClick = false; // 두 번째 클릭 여부를 나타내는 변수 추가
    let isThirdClick = false; // 세 번째 클릭 여부를 나타내는 변수 추가
    let dot = document.querySelector(".dot");
    let heading = document.querySelector("h1"); // h1 요소 선택
    let clickAgain; // Click me again 요소 변수 추가
    heading.style.opacity = 0; // 초기에는 h1이 숨겨져 있도록 설정

    document.body.addEventListener("click", function(event) {
        if (isFirstClick) { // 첫 번째 클릭일 때
            const text = document.querySelector(".text");

            // 텍스트 요소들을 숨기기 위해 투명도를 0으로 설정하고, 그룹으로 아래로 내리기
            text.style.opacity = 0;
            text.style.transition = "opacity 1s ease-in-out";
            setTimeout(function() {
                text.style.display = "none";
            }, 1000);

            // 빨간 작은 원을 커서 위치로 이동시키고 나타내기
            dot.style.display = "block";
            moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달

            // 첫 번째 클릭 시에도 마우스 이동 이벤트 추가
            document.addEventListener("mousemove", moveDotHandler);
            isFirstClick = false; // 첫 번째 클릭 상태 해제
            isSecondClick = true; // 두 번째 클릭 상태 설정
        } else if (isSecondClick && !isThirdClick) { // 두 번째 클릭 이후이면서 세 번째 클릭 전이면
            dot.style.display = "block";
            dot.style.left = (event.clientX - 20) + "px"; // 점의 가로 위치 조정
            dot.style.top = (event.clientY - 20) + "px"; // 점의 세로 위치 조정

            // 마우스 이동 이벤트 제거
            document.removeEventListener("mousemove", moveDotHandler);
            
            // h1 요소 서서히 나타내기
            heading.style.opacity = 1;
            heading.style.transition = "opacity 2s ease-in-out";
            
            // Click me again 문구 추가
            clickAgain = document.createElement("div");
            clickAgain.textContent = "Click me again!";
            clickAgain.classList.add("click-again");
            clickAgain.style.opacity = 0;
            clickAgain.style.transition = "opacity 2s ease-in-out";
            document.body.appendChild(clickAgain);

            // .clickAgain.show 클래스 추가
            clickAgain.classList.add("show");

            // 점의 위치를 기준으로 center로 정렬
            const dotRect = dot.getBoundingClientRect();
            clickAgain.style.left = (dotRect.left + (dotRect.width / 2) - (clickAgain.offsetWidth / 2)) + "px";
            clickAgain.style.top = (dotRect.bottom + 4) + "px";

            // 투명에서 불투명하게 서서히 나타내기
            setTimeout(function() {
                clickAgain.style.opacity = 1;
            }, 100);

            isThirdClick = true; // 세 번째 클릭 상태 설정
        }
    });


    function moveDotHandler(event) {
        moveDot(event.clientX, event.clientY); // 이벤트 객체의 좌표 전달
    }
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    dot.style.left = (x - 20) + "px"; // 점의 가로 위치 조정
    dot.style.top = (y - 20) + "px"; // 점의 세로 위치 조정
}

 document.querySelector('.dot').addEventListener('click', function() {
        if (isThirdClick) {
            const texts = document.querySelectorAll('.text');
            texts.forEach(text => {
                const x = Math.floor(Math.random() * (window.innerWidth - 200)) + 50;
                const y = Math.floor(Math.random() * (window.innerHeight - 200)) + 50;
                text.style.left = x + 'px';
                text.style.top = y + 'px';
                text.style.display = 'block';
            });
            this.removeEventListener('click', arguments.callee);
        }
    });
});
