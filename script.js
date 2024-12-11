// ฟังก์ชันสำหรับแสดงป๊อปอัพติดต่อเรา
function showContactPopup() {
    console.log("showContactPopup ถูกเรียกใช้");
    document.getElementById('contact-qr-code').src = "images/LINE_QR.png";  // อัพเดท QR code
    document.getElementById('contact-phone').textContent = "Phone: +66 092 479 7404";  // อัพเดทเบอร์โทร
    document.getElementById('contact-email').textContent = "Email: neng.ar470@gmail.com";  // อัพเดทอีเมล์
    document.getElementById('contact-popup').classList.add('show');  // แสดงป๊อปอัพ
}

// ฟังก์ชันปิดป๊อปอัพเมื่อคลิกนอกป๊อปอัพ
window.addEventListener('click', function(event) {
    const popup = document.getElementById('contact-popup');
    const popupContent = document.querySelector('.popup-content'); // กำหนดให้คลิกใน .popup-content ไม่ปิดป๊อปอัพ
    if (!popupContent.contains(event.target) && event.target === popup) {
        popup.classList.remove('show');  // ซ่อนป๊อปอัพ
    }
});

// ฟังก์ชันสำหรับปิดป๊อปอัพเมื่อกดปุ่ม Esc
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popup = document.getElementById('contact-popup');
        popup.classList.remove('show');  // ซ่อนป๊อปอัพเมื่อกดปุ่ม Esc
    }
});

// ฟังก์ชันเปิดแชท Facebook
function openFacebookChat() {
    window.open("https://www.facebook.com/people/AR470-Drawing-Team/61570113311389/");  // เปิดหน้าต่างแชท Facebook
}








// ฟังก์ชันเพื่อโหลดและแสดงรูปภาพจากโฟลเดอร์ images_gallery
function loadImages() {
    const imageWrapper = document.querySelector('.image-wrapper');
    
    const folderPath = 'images_gallery/';
    const images = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        'image8.png',
        'image9.png',
        'image10.png',
        'image11.png',
        'image12.png'
    ];
    
    let currentIndex = 0;
    const imageFrames = [];
    
    for (let i = 0; i < 5; i++) {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-frame');

        const img = document.createElement('img');
        img.src = folderPath + images[(currentIndex + i) % images.length];
        img.alt = images[(currentIndex + i) % images.length];

        imgDiv.appendChild(img);
        imageFrames.push(imgDiv);
        imageWrapper.appendChild(imgDiv);
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageFrames.forEach((frame, index) => {
            const img = frame.querySelector('img');
            img.src = folderPath + images[(currentIndex + index) % images.length];
            img.alt = images[(currentIndex + index) % images.length];
        });
    }, 3000);
}

window.onload = function() {
    loadImages();
    addClickEventToImages();
};

// ฟังก์ชันสำหรับเปิดป๊อปอัพแสดงรูปใหญ่
function openImagePopup(imageSrc) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    
    popupImage.src = imageSrc;
    popup.classList.add('show');
}

// ฟังก์ชันปิดป๊อปอัพเมื่อคลิกที่พื้นที่ว่างหรือปุ่มปิด
function closeGalleryPopup(event) {
    const popup = document.getElementById('image-popup');
    const closeButton = document.getElementById('close-popup');
    
    // ตรวจสอบว่าคลิกในพื้นที่นอกป๊อปอัพหรือปุ่ม "X"
    if (event.target === popup || event.target === closeButton) {
        popup.classList.remove('show');
    }
}

// เพิ่มการคลิกที่รูปภาพในแกลเลอรี่เพื่อแสดงภาพในป๊อปอัพ
function addClickEventToImages() {
    const imageFrames = document.querySelectorAll('.image-frame img');
    
    imageFrames.forEach(img => {
        img.addEventListener('click', function() {
            openImagePopup(this.src);
        });
    });
}

// ฟังก์ชันฟังการกดปุ่ม ESC
function handleEscKey(event) {
    const popup = document.getElementById('image-popup');
    if (event.key === 'Escape' && popup.classList.contains('show')) {
        popup.classList.remove('show');
    }
}

// ฟังก์ชันฟังการคลิกพื้นที่นอกป๊อปอัพหรือปุ่มปิด
window.onclick = function(event) {
    const popup = document.getElementById('image-popup');
    const closeButton = document.getElementById('close-popup');
    
    // ตรวจสอบว่าคลิกในพื้นที่นอกป๊อปอัพหรือปุ่ม "X"
    if (event.target === popup || event.target === closeButton) {
        closeGalleryPopup(event);
    }
};

// ฟังก์ชันฟังการกดปุ่ม ESC
window.addEventListener('keydown', handleEscKey);





let currentImageIndex = 0;
const images = [
    'images_gallery/image1.png',
    'images_gallery/image2.png',
    'images_gallery/image3.png',
    'images_gallery/image4.png',
    'images_gallery/image5.png',
    'images_gallery/image6.png',
    'images_gallery/image7.png',
    'images_gallery/image8.png',
    'images_gallery/image9.png',
    'images_gallery/image10.png',
    'images_gallery/image11.png',
    'images_gallery/image12.png',
    // เพิ่มภาพทั้งหมดที่นี่
];

function openImagePopup(imageSrc) {
    console.log('Image clicked:', imageSrc); // ตรวจสอบค่า src ของภาพที่คลิก

    // ตัด path ส่วนที่ไม่จำเป็นออกเพื่อหาเฉพาะชื่อไฟล์
    const src = imageSrc.split('/').pop(); // ดึงเฉพาะชื่อไฟล์ เช่น "image1.png"

    // ค้นหา index ของภาพในอาร์เรย์ images
    currentImageIndex = images.findIndex(image => image.endsWith(src));
    console.log('Index found:', currentImageIndex); // ตรวจสอบ index ที่ค้นพบ

    if (currentImageIndex === -1) {
        console.error('Image not found in the array!');
        return; // หากไม่พบภาพในอาร์เรย์ ให้หยุดทำงาน
    }

    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = images[currentImageIndex]; // แสดงภาพในป๊อปอัพ
    popup.classList.add('show'); // เปิดป๊อปอัพ
}


function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('popup-image').src = images[currentImageIndex];
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('popup-image').src = images[currentImageIndex];
}



window.onload = function () {
    loadImages();
    addClickEventToImages();
};

window.onclick = function (event) {
    closeImagePopup(event);
};

window.addEventListener('keydown', function (event) {
    const popup = document.getElementById('image-popup');
    if (popup.classList.contains('show')) {
        if (event.key === 'ArrowRight') showNextImage();
        else if (event.key === 'ArrowLeft') showPreviousImage();
        else if (event.key === 'Escape') popup.classList.remove('show');
    }
});





