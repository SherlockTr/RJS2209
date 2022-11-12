class Circle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    get getRadius() { 
        return this.radius; 
    }

    get getArea() {
        const x = this.radius*this.radius * 3.14;
        return x.toFixed(2);
    }
}

const round = new Circle(10.2,"black");
console.log("Giá trị radius là: ", round.radius);
console.log("Diện tích là: ", round.getArea);

class Cylinder extends Circle {
    height;
    constructor(height, radius, color) {
        super (radius, color);
        this.height = height;
    }

    get getHeight() {
        return this.height;
    }

    get getVolumne() {
        return this.getArea*this.height;
    }
}

const cyl = new Cylinder(6, 7.5, "red")
console.log("Các giá trị là: ", cyl);
console.log("Thể tích là: ", cyl.getVolumne);