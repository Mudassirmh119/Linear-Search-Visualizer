import React from 'react'

export default function BinaryTree() {
    return (
        <React.Fragment>
            <div className='container'>
            <div>
                <div className="n1">12</div>
            </div>
            <div>
                <div className='n3'>11</div>
                <div className='n2'>13</div>
            </div>
            <div>
                <div className='n4'>10</div>
                <div className='n5'>16</div>
                <div className='n6'>23</div>
                <div className='n7'>15</div>
            </div>
            <div>
                <div className='n8'>65</div>
                <div className='n9'>55</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                
                
            </div>
        </div>
            <svg height="600" width="1350">
                    <line x1="16" y1="1" x2="16" y2="585" className='line' />
                    
                    <line x1="678" y1="1" x2="678" y2="585" className='line'/>

                    <line x1="16" y1="1" x2="1348" y2="1" className='line'/>

                    <line x1="1348" y1="1" x2="1348" y2="585" className='line'/>

                    <line x1="16" y1="585" x2="1348" y2="585" className='line'/>

                    <line x1="16" y1="293" x2="1348" y2="293" className='line'/>


                </svg>
        </React.Fragment>
    )
}
