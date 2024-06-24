import './Banner.css'
import twitterLogo from '../../../assets/Img/Img-Social/twitter.png'
import facebookLogo from '../../../assets/Img/Img-Social/facebook.png'
import instagramLogo from '../../../assets/Img/Img-Social/instagram.png'
import githubLogo from '../../../assets/Img/Img-Social/github.png'
import programIcon from '../../../assets/programmer.png'

function Banner() {

    return (
      <div id='Banner' className='banner-container'>

        <div className="info-banner">

            {/* Profile info Banner */}
            <div className="profile-banner">

                <p className='p-profile-banner'>Hi, my name is</p>

                <h1 className='h1-profile-banner'>Krarit Phimphila</h1>

                <div className="textswitch-profile-banner">
                    <p className='p2-profile-banner'>always be</p>
                    <div className="message-banner">
                        <div className="word">Learning</div>
                        <div className="word">Coding</div>
                        <div className="word">Creating</div>
                        <div className="word">Cooking</div>
                    </div>
                </div>

                <div className="social-profile-banner">
                    <div className="social"><a href="https://www.instagram.com/karis__adolphe/" target='blank'><img src={instagramLogo} alt="IG" className='img-social' /></a></div>
                    <div className="social"><a href="https://www.facebook.com/golfrunner.phimphila/?locale=th_TH" target='blank'><img src={facebookLogo} alt="Facebook" className='img-social' /></a></div>
                    <div className="social"><a href="https://x.com/Nasuya7" target='blank'><img src={twitterLogo} alt="Twitter" className='img-social' /></a></div>
                    <div className="social"><a href="https://github.com/krarikr" target='blank'><img src={githubLogo} alt="GitHub" className='img-social' /></a></div>
                </div>

                <div className="btn-profile-banner">
                    <button className='btn-banner'>
                        <a href="#Contact" className='a-btn-banner'>Let's Talk</a>
                    </button>
                </div>

            </div>

            {/* Img info Banner */}
            <div className="img-profile-banner">
         
                    <img src={programIcon} alt="Profile-Image" className='img-banner'/>
            </div>
    
        </div>

      </div>
    )
  }
  export default Banner