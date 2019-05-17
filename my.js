let NewImg = function (image, top, left, height, width, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.getLeft = function () {
        return this.left;
    };
    this.getImage = function () {
        return '<img src="' + this.image + '.jpg" id="' + this.image + '" ' + 'style="position:absolute;left: ' + this.left + 'px;top: ' + this.top + 'px;" height="' + this.height + '" width="' + this.width + '">'
    };
    this.moveRight = function () {
        this.left += this.speed;
    };
    this.moveLeft = function () {
        this.left = this.left - this.speed;
    };
    this.moveDown = function () {
        this.top += this.speed;
    };
    this.moveTop = function () {
        this.top = this.top - this.speed;
    };
};
let rong = new NewImg('rong', 0, 0, 100, 200, 10);
let rongDown = new NewImg('rongDown', 0, 2 * window.innerHeight+150 , 200, 100, 10);
let rongLeft = new NewImg('rongLeft', window.innerWidth / 2-225, 2 * window.innerHeight+50, 100, 200, 10);
let rongTop = new NewImg('rongTop', window.innerWidth / 2 -325, 0, 200, 100, 10);
let dem = 0;
function Start(name, name2, name3, name4) {
    if (dem == 0) {
        if (name.getLeft() < window.innerWidth - name.width) {
            name.moveRight();
            document.getElementById(name.image).innerHTML = name.getImage();
        } else {
            dem = 1;
            document.getElementById(name.image).innerHTML = '';
            document.getElementById(name2.image).innerHTML = name2.getImage();
            name2.top=0;
        }
    }

    if (dem == 1) {
        if (name2.top < window.innerHeight - name2.height) {
            name2.moveDown();
            document.getElementById(name2.image).innerHTML = name2.getImage();
        }else {
            dem = 2;
            document.getElementById(name2.image).innerHTML = '';
            document.getElementById(name3.image).innerHTML = name3.getImage();
            name3.left=2 * window.innerHeight+50;
        }
    }

    if (dem == 2) {
        if (name3.left > 0) {
            name3.moveLeft();
            document.getElementById(name3.image).innerHTML = name3.getImage();
        }else {
            dem = 3;
            document.getElementById(name3.image).innerHTML = '';
            document.getElementById(name4.image).innerHTML = name4.getImage();
            name4.top=window.innerWidth / 2 -325;
        }
    }
    if (dem == 3) {
        if (name4.top > 0) {
            name4.moveTop();
            document.getElementById(name4.image).innerHTML = name4.getImage();
        }else {
            dem = 0;
            document.getElementById(name.image).innerHTML = name.getImage();
            document.getElementById(name4.image).innerHTML = '';
            name.left=0;
        }
    }
}
 function reStart() {
   Start(rong,rongDown,rongLeft,rongTop);
    setTimeout(reStart, 0.001);
}
reStart();
