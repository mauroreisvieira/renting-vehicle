import * as React from 'react';

export class MenuComponent extends React.Component {
    public render(): any {
        return (<ul className='menu'>
                <li className='menu__item'>
                    <a href='./index.html' className='menu__item__link'>Home</a>
                </li>
                <li className='menu__item menu__item--active'>
                    <a href='./styleguide.html' className='menu__item__link'>Styleguide</a>
                </li>
            </ul>);
    }
}
