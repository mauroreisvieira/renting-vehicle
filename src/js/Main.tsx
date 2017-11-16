import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Vehicle from './model/Vehicle';

import { HelloComponent } from './components/HelloComponent';
import {VehicleComponent} from './components/VehicleComponent';

import '../scss/app.scss';

export default class Main {
    public car: Vehicle;
    public motorcycle: Vehicle;

    constructor () {
        this.car = new Vehicle('red', 10, 5, 'Car');
        this.motorcycle = new Vehicle('blue', 2, 2, 'Motorcycle');
        this.init();
    }

    public init(): void {
        ReactDOM.render(
            <HelloComponent compiler='TypeScript' framework='React' />,
            document.getElementById('hello')
        );

        ReactDOM.render(
            <VehicleComponent vehicleType={this.car.vehicleType} color={this.car.color} numWheels={this.car.numWheels} age={this.car.age} />,
            document.getElementById('car')
        );

        ReactDOM.render(
            <VehicleComponent vehicleType={this.motorcycle.vehicleType} color={this.motorcycle.color} numWheels={this.motorcycle.numWheels} age={this.motorcycle.age} />,
            document.getElementById('motorcycle')
        );
    }
}
new Main();
