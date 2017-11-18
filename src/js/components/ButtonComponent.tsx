import * as React from 'react';

export class ButtonComponent extends React.Component {
    render() {
        return (
            <div>
                <button className='button button--small button--danger'>Button Small</button>
                <button className='button button--medium button--success'>Button Medium</button>
                <button className='button button--large button--info'>Button Small</button>
            </div>
        );
    }
}
