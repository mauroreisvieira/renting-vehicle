import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Vehicle from './model/Vehicle';

import { MenuComponent } from './components/layout/MenuComponent';

import { ButtonComponent } from './components/ButtonComponent';
import { ColorComponent } from './components/ColorComponent';
import { TypographyComponent } from './components/TypographyComponent';

import '../scss/pages/styleguide.scss';

export default class Styleguide {

    constructor () {
        this.init();
    }

    public init(): void {

        ReactDOM.render(
            <MenuComponent />,
            document.getElementById('sidenav')
        );

        // Typography
        ReactDOM.render(
            <TypographyComponent />,
            document.getElementById('typography')
        );

        // Button
        ReactDOM.render(
            <ButtonComponent />,
            document.getElementById('button')
        );

        // Color
        ReactDOM.render(
            <ColorComponent />,
            document.getElementById('color')
        );
    }
}
new Styleguide();
