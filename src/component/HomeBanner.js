import React from 'react'
import {Link} from 'react-router-dom'
import Cover_Comp from '../images/Cover_Comp.png'


function HomeBanner() {
    return (
        <div>
                <div className='bg_banner'>
                <div className='container'>
                <div className="net l6 m6 s12">
                    <h1 className="clr_green txt_bannerHead">
                    SD-WAN is crucial to user <span>experience</span>
                    </h1>
                    <p className="proxima txt_bannerParagraph">
                    Read our Telsyte SD-WAN Indicator report to find out how SD-WAN can
                    transform your business
                    </p>
                    <Link to="/about" target="_blank" className="btn-global">Read More</Link>
                    </div>
                    <div className="net l5 m5 s12 hidden-sm">
                      <img src={Cover_Comp} alt="banner thumbnail" className="cover_img" loading="lazy"/>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default HomeBanner
