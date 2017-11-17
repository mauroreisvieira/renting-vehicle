import * as React from 'react';

export class SideNavComponent extends React.Component {
    public render(): any {
        return (<div className='content'>
                <nav className='header__nav'>
                    <ul className='nav nav--right'>
                        <li className='nav__item '><a href='./index.html' className='nav__item-link'>Home</a></li>
                        <li className='nav__item nav__item--active'><a href='./test.html' className='nav__item-link'>Test</a></li>
                    </ul>
                </nav>
            </div>);
    }
}
