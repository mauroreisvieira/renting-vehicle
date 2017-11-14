export default class Vehicle {
    public color: string;
    public age: number;
    public numWheels: number;
    public vehicleType: string;

    constructor (color: string, age: number, numWheels: number, vehicleType: string) {
        this.color = color;
        this.age = age;
        this.numWheels = numWheels;
        this.vehicleType = vehicleType;
    }
}
