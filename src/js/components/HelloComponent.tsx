import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class HelloComponent extends React.Component<HelloProps, {}> {
    render() {
        return <h3>Hello from {this.props.compiler} and {this.props.framework}!</h3>;
    }
}
