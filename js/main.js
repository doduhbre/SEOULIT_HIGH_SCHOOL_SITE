const searchEl = document.querySelector('.search');
//클래스가 search인 요소 css에서 선택자로 찾아서 변수에 할당
const searchInputEl = searchEl.querySelector('input');
//searchEl안 input요소 찾기

searchEl.addEventListener('click', function() { //searchEl에 클릭 event추가
    searchInputEl.focus(); //input요소 focus
});

searchInputEl.addEventListener('focus', function() { //searchInputEl에 focus가 되면 함수가 실행됨
    searchEl.classList.add('focused'); //검색요소 클래스가 search인 요소에 focused클래스 추가
    searchInputEl.setAttribute('placeholder', '검색');
    //searchInputEl 부분에 html 속성 지정, 검색을 눌렀을 때, 검색이라는 글이 나오도록
});

searchInputEl.addEventListener('blur', function() { //focus가 해제되었을 때
    searchEl.classList.remove('focused'); //focused 삭제
    searchInputEl.setAttribute('placeholder', ''); //검색이라는 글 삭제
});

// Swiper(선택자, 옵션) 
new Swiper('.promotion .swiper-container', { //.promotion .swiper-container라는 요소 슬라이드
    //direction: 'horizontal'
    slidesPerView: 1, //페이지에 보여질 이미지 수
    centeredSlides: true, //슬라이드 가운데 나타나도록
    loop: true, //자동으로 넘어갈 수 있도록
    autoplay: {
        delay: 5000 //5초 간격으로 넘어가도록 지정
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay: 5000
    },
    loop: true
});