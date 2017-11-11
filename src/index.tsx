import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Vehicle } from "./components/Vehicle";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("hello")
);

ReactDOM.render(
    <Vehicle vehicleType="Motorcycle" color="Blue" numWheels="2" age="10" />,
    document.getElementById("car")
);

ReactDOM.render(
    <Vehicle vehicleType="Motorcycle" color="Blue" numWheels="2" age="10" />,
    document.getElementById("motorcycle")
);
