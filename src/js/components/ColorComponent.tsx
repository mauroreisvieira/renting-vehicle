import * as React from 'react';

export class ColorComponent extends React.Component {
    private colors: any = [];

    constructor(props: any){
        super(props);
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
                        <div className='box__item bg-red'>
                            <p className='t-upper'>Red</p>
                        </div>
                        <div className='box__item bg-red'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-red--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-red--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-orange'>
                            <p className='t-upper'>Orange</p>
                        </div>
                        <div className='box__item bg-orange'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-orange--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-orange--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-blue'>
                            <p className='t-upper'>Blue</p>
                        </div>
                        <div className='box__item bg-blue'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-blue--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-blue--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-green'>
                            <p className='t-upper'>Green</p>
                        </div>
                        <div className='box__item bg-green'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-green--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-green--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-red'>
                            <p className='t-upper'>Red</p>
                        </div>
                        <div className='box__item bg-red'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-red--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-red--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-orange'>
                            <p className='t-upper'>Orange</p>
                        </div>
                        <div className='box__item bg-orange'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-orange--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-orange--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-blue'>
                            <p className='t-upper'>Blue</p>
                        </div>
                        <div className='box__item bg-blue'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-blue--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-blue--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
                <div className='col-small-3 col-medium-3 col-large-3'>
                    <div className='box'>
                        <div className='box__item bg-green'>
                            <p className='t-upper'>Green</p>
                        </div>
                        <div className='box__item bg-green'>
                            <p>base</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-green--lighten'>
                            <p>lighten</p>
                            <span>#f44336</span>
                        </div>
                        <div className='box__item bg-green--darken'>
                            <p>darken</p>
                            <span>#f44336</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
