import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface VehicleProps {
    vehicleType: string;
    color: string;
    numWheels: number;
    age: number;
}

export class VehicleComponent extends React.Component<VehicleProps, {}> {

  constructor (props: any) {
    super(props);
    console.log(this.props);
  }

  public render() {
    return <div>
    <div>VehicleType: {this.props.vehicleType}</div>
    <div>Color: {this.props.color}</div>
    <div>Wheels: {this.props.numWheels}</div>
    <div>Age: {this.props.age}</div>
    </div>;
  }
}
