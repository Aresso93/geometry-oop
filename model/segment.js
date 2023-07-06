class Segment {
  constructor(xA, yA, xB, yB) {
    this.pointA = new Point(xA, yA);
    this.pointB = new Point(xB, yB);
  }

  // static fromPoints(pointA, pointB){    questa è una factory

  //     const newSegment = new Segment(pointA.x, pointA.y, pointB.x, pointB.y);
  // }

  // getLength(){
  //     const deltaX = this.pointA.x - this.pointB.x;
  //     const deltaY = this.pointA.y - this.pointB.y;

  //     const length = Math.sqrt(deltaX ** 2 + deltaY **2);
  //     return length;
  // }

  get length() {
    const deltaX = this.pointA.x - this.pointB.x;
    const deltaY = this.pointA.y - this.pointB.y;

    const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    return length;
  }
}
