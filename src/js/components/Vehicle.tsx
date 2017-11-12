import * as React from "react";

export interface VehicleProps {
  vehicleType: string,
  color: string,
  numWheels: string,
  age: string,
}

export class Vehicle extends React.Component<VehicleProps, {}> {
  render() {
    return <div>
      <div>VehicleType: {this.props.vehicleType}</div>
      <div>Color: {this.props.color}</div>
      <div>Wheels: {this.props.numWheels}</div>
      <div>Age: {this.props.age}</div>
    </div>
  }
}

