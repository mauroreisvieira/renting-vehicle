import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface VehicleProps {
    vehicleType: string;
    color: string;
    numWheels: number;
    age: number;
}

export class VehicleComponent extends React.Component<VehicleProps, {}> {
  public render(): any {
    return <div>
        <h4>VehicleType: {this.props.vehicleType}</h4>
        <div>Color: {this.props.color}</div>
        <div>Wheels: {this.props.numWheels}</div>
        <div>Age: {this.props.age}</div>
    </div>;
  }
}
