import * as React from 'react';

export class ButtonComponent extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-small-12 col-medium-12 col-large-12'>
                    <h1 className='text-red'>Button</h1>
                </div>
                <div className='col-small-12 col-medium-12 col-large-12'>
                    <div>
                        <button className='button button--small button--danger'>Button Small</button>
                        <button className='button button--medium button--success'>Button Medium</button>
                        <button className='button button--large button--info'>Button Large</button>
                        <button className='button button--large button--default' disabled>Button Disabled</button>
                    </div>
                </div>
            </div>
        );
    }
}
