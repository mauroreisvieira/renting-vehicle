import * as React from 'react';

export class ColorComponent extends React.Component {
    private colors: any = [];

    constructor(props: any){
        super(props);

        this.colors = [
            'red': {
                base: '#f44336',
                lighten: '#ff4d63',
                darken: '#ff4d63',
                accent: '#ff4d63',
            }
        ];
        console.log(this.colors);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-small-12 col-medium-12 col-large-12'>
                    <h1 className='text-red'>Color</h1>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-pink'><p>$u-color-pink (Base)</p></div>
                        <div className='box__item bg-pink'><p>$u-color-pink (Base)</p></div>
                        <div className='box__item bg-pink'><p>$u-color-pink (Base)</p></div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-red'><p>$u-color-red (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-blue'><p>$u-color-blue (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-green'><p>$u-color-green (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-yellow'><p>$u-color-yellow (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-orange'><p>$u-color-orange (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-salmon'><p>$u-color-salmon (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-violet'><p>$u-color-violet (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-yellow'><p>$u-color-yellow (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-orange'><p>$u-color-orange (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-salmon'><p>$u-color-salmon (Base)</p></div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box bg-violet'><p>$u-color-violet (Base)</p></div>
                </div>
            </div>
        );
    }
}
