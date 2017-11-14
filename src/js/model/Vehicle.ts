export default class Vehicle {
    public color: string;
    public age: number;
    public numWheels: number;
    public vehicleType: any;

    constructor (color: string, age: number, numWheels: number, vehicleType: any) {
        this.color = color;
        this.age = age;
        this.numWheels = numWheels;
        this.vehicleType = vehicleType;
    }
}
