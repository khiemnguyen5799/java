'use strict';
// Lab 15.1. Đọc và hiển thị hình ảnh
function createImage(imgPath) {
    return new Promise(function (resolve, reject) {
        const imgEl = document.createElement('img');
        imgEl.src = imgPath;

        imgEl.addEventListener('load', function () {
            imgEl.classList.add('img');
            document.body.appendChild(imgEl);
            resolve(imgEl);
        });
        imgEl.addEventListener('error', function () {
            reject(new Error('Đã có lỗi!'));
        });
    });
}

let currentImg = async function (img) {
    await currentImg.Promise(imgPath);
};

createImage('')
    .then((imgEl) => {
        currentImg = imgEl;
        console.log('img/anh-cute-meo5-768x768.jpg');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('');
    })
    .then((imgEl) => {
        currentImg = imgEl;
        console.log('img/anh-cute-meo15.jpg');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch((err) => console.error(err));

//Lab 15.2: Hiển thị một tập hợp ảnh
async function loadNPause() {
    try {
        //img 1
        const imgEl1 = await createImage('img/anh-cute-meo5-768x768.jpg');
        await wait(2);
        imgEl1.style.display = 'none';

        //img 2
        const imgEl2 = await createImage('img/anh-cute-meo15.jpg');
        await wait(2);
        imgEl2.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
}
loadNPause();

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async (img) => await createImage(img));
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach((img) => img.classList.add('myClass'));
    } catch (err) {
        console.error(err);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
