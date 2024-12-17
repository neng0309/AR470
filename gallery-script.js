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


let currentImageIndex = 0;
let currentAlbumImages = [];  // สำหรับเก็บภาพในอัลบั้มที่เปิด


// ฟังก์ชันเปิดอัลบั้ม
function openAlbum(album) {
    const albumImages = {
        '2024-1': [
            'Port-gallery/2024/1/work1.jpg',
            'Port-gallery/2024/1/work2.jpg',
            'Port-gallery/2024/1/work3.jpg',
            'Port-gallery/2024/1/work4.jpg',
            'Port-gallery/2024/1/work5.jpg',
            'Port-gallery/2024/1/work6.jpg',
            'Port-gallery/2024/1/work7.jpg',
            'Port-gallery/2024/1/work8.jpg',
            'Port-gallery/2024/1/work9.jpg'
        ],
        '2024-2': [
            'Port-gallery/2024/2/work1.jpg',
            'Port-gallery/2024/2/work2.jpg',
            'Port-gallery/2024/2/work3.jpg',
            'Port-gallery/2024/2/work4.jpg',
            'Port-gallery/2024/2/work5.jpg',
            'Port-gallery/2024/2/work6.jpg',
            'Port-gallery/2024/2/work7.jpg'
        ],
        '2024-3': [
            'Port-gallery/2024/3/work1.jpg',
            'Port-gallery/2024/3/work2.jpg',
            'Port-gallery/2024/3/work3.jpg',
            'Port-gallery/2024/3/work4.jpg',
            'Port-gallery/2024/3/work5.jpg',
            'Port-gallery/2024/3/work6.jpg',
            'Port-gallery/2024/3/work7.jpg'
        ]
    };

    // โหลดภาพจากอัลบั้ม
    currentAlbumImages = albumImages[album];
    currentImageIndex = 0;  // เริ่มต้นที่ภาพแรก
    showLightbox();
}

// ฟังก์ชันแสดง Lightbox และการนำทาง
function showLightbox() {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.onclick = () => lightbox.remove();

    // แสดงภาพใน lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.src = currentAlbumImages[currentImageIndex];
    lightbox.appendChild(lightboxImage);

    // สร้างปุ่มนำทาง (Next, Prev)
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.innerHTML = '&lt;';
    prevButton.onclick = (e) => {
        e.stopPropagation();
        showPreviousImage();
    };

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.innerHTML = '&gt;';
    nextButton.onclick = (e) => {
        e.stopPropagation();
        showNextImage();
    };

    navigation.appendChild(prevButton);
    navigation.appendChild(nextButton);
    lightbox.appendChild(navigation);

    // แสดงข้อมูลการนับภาพ
    const imageCounter = document.createElement('div');
    imageCounter.classList.add('image-counter');
    imageCounter.innerText = `รูปที่ ${currentImageIndex + 1} / ${currentAlbumImages.length}`;
    lightbox.appendChild(imageCounter);

    // ปุ่มปิด (X)
    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.innerText = '×';
    closeButton.onclick = (e) => {
        e.stopPropagation();
        lightbox.remove(); // ปิด lightbox
    };
    lightbox.appendChild(closeButton);

    document.body.appendChild(lightbox);
}

function showNextImage() {
    if (currentImageIndex < currentAlbumImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // กลับไปที่ภาพแรก
    }
    updateLightboxImage();
}

function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = currentAlbumImages.length - 1; // กลับไปที่ภาพสุดท้าย
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.querySelector('.lightbox img');
    const imageCounter = document.querySelector('.image-counter');
    if (lightboxImage) {
        lightboxImage.src = currentAlbumImages[currentImageIndex];
    }
    if (imageCounter) {
        imageCounter.innerText = `รูปที่ ${currentImageIndex + 1} / ${currentAlbumImages.length}`;
    }
}

// การตรวจจับการกดคีย์
window.addEventListener('keydown', function (event) {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        if (event.key === 'ArrowRight') {
            showNextImage();
        } else if (event.key === 'ArrowLeft') {
            showPreviousImage();
        } else if (event.key === 'Escape') {
            lightbox.remove();
        }
    }
});
