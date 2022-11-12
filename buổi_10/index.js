class Rectangle {
    static height = 0;
    width;
// 1 class chỉ có 1 hàm contructor
    constructor() {
        this.height = 20;
        this.width = 10;
    }

    static displayHeight() {
        return this.height;
    }
}

// const rec = new Rectangle();
// console.log(rec);

const rec2= new Rectangle(20, 10);
console.log(rec2.height, rec2.width);
console.log(Rectangle.displayHeight());