import * as React from 'react';

export class SideNavComponent extends React.Component {
    public render(): any {
        return (<ul className='nav'>
                <li className='nav__item'>
                    <a href='./index.html' className='nav__item-link'>Home</a>
                </li>
                <li className='nav__item nav__item--active'>
                    <a href='./test.html' className='nav__item-link'>Test</a>
                </li>
            </ul>);
    }
}
