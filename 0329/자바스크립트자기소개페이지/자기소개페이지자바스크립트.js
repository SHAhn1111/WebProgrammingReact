document.addEventListener('DOMContentLoaded', function () {
    
    var body = document.body;

    
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/style.css';
    document.head.appendChild(link);

    
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    body.appendChild(wrapper);

    
    var title = document.createElement('h1');
    title.textContent = '안소현의 소개';
    wrapper.appendChild(title);


    var infoSection = document.createElement('section');
    infoSection.id = 'my_info';
    wrapper.appendChild(infoSection);

    var infoTitle = document.createElement('h2');
    infoTitle.textContent = 'My Info';
    infoSection.appendChild(infoTitle);

    var img = document.createElement('img');
    img.src = 'images/profile_images.jpg';
    img.alt = '안소현의 강아지 사진';
    infoSection.appendChild(img);

    var table = document.createElement('table');
    infoSection.appendChild(table);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    var data = [
        { title: '이름', value: '안소현' },
        { title: '직업', value: '대학생' },
        { title: '나이', value: '25' },
        { title: '거주지', value: '부산' }
    ];

    data.forEach(function (item) {
        var row = document.createElement('tr');
        var th = document.createElement('th');
        th.textContent = item.title;
        var td = document.createElement('td');
        td.textContent = item.value;
        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
    });
    var aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    wrapper.appendChild(aboutSection);

    var aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Me!';
    aboutSection.appendChild(aboutTitle);

    var aboutText = document.createElement('p');
    aboutText.innerHTML = '안녕하세요. 저는 2024년 4월 현재 소프트웨어학과에 재학중인 2020575031 안소현입니다.<br>현재 개발자를 목표로 전공 공부와 영어 공부를 하고 있습니다. 학교 수업과 책, 인터넷 강의 등을 통하여<br>공부를 하고 있고 공부 한 내용을 깃허브에 업로드 하고 있습니다.';
    aboutSection.appendChild(aboutText);
    
    var contactSection = document.createElement('section');
    contactSection.id = 'contact';
    wrapper.appendChild(contactSection);

    var contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact';
    contactSection.appendChild(contactTitle);

    var ul = document.createElement('ul');
    contactSection.appendChild(ul);

    var contacts = [
        { type: 'tel', value: '010-8778-0000', display: '010-8**8-****', protocol: 'tel:' },
        { type: 'email', value: 'snini7355@naver.com', display: 'snini7355@naver.com', protocol: 'mailto:' },
        { type: 'link', value: 'https://github.com/SHAhn1111', display: 'Github', protocol: '' }
    ];

    contacts.forEach(function (contact) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = `${contact.protocol}${contact.value}`;
        a.textContent = contact.display;
        if (contact.type === 'link') a.target = '_blank';
        li.appendChild(a);
        ul.appendChild(li);
    });
});