import './Skill.css'
import htmlLogo from '../../../../assets/Img/Img-Skill/html.svg'
import cssLogo from '../../../../assets/Img/Img-Skill/css.svg'
import jsLogo from '../../../../assets/Img/Img-Skill/javascript.svg'
import tsLogo from '../../../../assets/Img/Img-Skill/typescript.svg'
import sassLogo from '../../../../assets/Img/Img-Skill/sass.svg'
import nodeLogo from '../../../../assets/Img/Img-Skill/nodejs.svg'
import viteLogo from '../../../../assets/Img/Img-Skill/vite.svg'
import figmaLogo from '../../../../assets/Img/Img-Skill/figma.svg'
import reatLogo from '../../../../assets/Img/Img-Skill/react.svg'
import nextLogo from '../../../../assets/Img/Img-Skill/nextjs-black.svg'
import tailWindLogo from '../../../../assets/Img/Img-Skill/tailwindcss.svg'
import styleComponentLogo from '../../../../assets/Img/Img-Skill/styledcomponents.svg'
import axiosLogo from '../../../../assets/Img/Img-Skill/axios.png'
import mySqlLogo from '../../../../assets/Img/Img-Skill/mysql.svg'
import gitLogo from '../../../../assets/Img/Img-Skill/git.svg'
import emailjsLogo from '../../../../assets/Img/Img-Skill/emailjs.png'
import phpLogo from '../../../../assets/Img/Img-Skill/php.png'
import bsLogo from '../../../../assets/Img/Img-Skill/bootstrap.png'


function Skill() {
    return (
      <div id='Skill' className='skill-container'>

        <p className='p-skill'>SKILL</p>

        <h1 className='h1-skill'>My Skills</h1>

        <h2 className="h2-skill">
        I like to take responsibility to craft aesthetic user experience using <b className='b-skill'>gradient.</b>
        </h2>

        <h3 className='h3-skill'>LANGUAGES AND TOOLS</h3>

        <div className='icon-skill-1'>
            <img src={htmlLogo} className='img-skill' alt="HTML" />
            <img src={cssLogo} className='img-skill' alt="CSS" />
            <img src={jsLogo} className='img-skill' alt="JS" />
            <img src={tsLogo} className='img-skill' alt="TS" />
            <img src={phpLogo} className='img-skill' alt="PHP" />
            <img src={nodeLogo} className='img-skill' alt="NODE.JS" />
            <img src={viteLogo} className='img-skill' alt="VITE" />
            <img src={figmaLogo} className='img-skill' alt="FIGMA" />
        </div>

        <h3 className='h3-skill'>LIBRARIES AND FRAMEWORKS</h3>

        <div className='icon-skill-1'>
             <img src={reatLogo} className='img-skill' alt="REACT.JS" />
             <img src={nextLogo} className='img-skill' alt="NEXT.JS" />
             <img src={emailjsLogo} className='img-skill' alt="EMAIL.JS" />
             <img src={sassLogo} className='img-skill' alt="SASS" />
             <img src={bsLogo} className='img-skill' alt="BOOTSTRAP" />
             <img src={tailWindLogo} className='img-skill' alt="TAILWIND" />
             <img src={styleComponentLogo} className='img-skill' alt="STYLE COMPINENT" />
             <img src={axiosLogo} className='img-skill' alt="AXIOS" />
        </div>

        <div className='textWrap-skill'>

            <div className='wrap-icon-skill'>
                <h3 className='h3-skill'>DATABASES</h3>
                    <div className='icon-skill-2'>
                        <img src={mySqlLogo} className='img-skill' alt="MYSQL" />
                    </div>
            </div>

            <div className='wrap-icon-skill'>
                <h3 className='h3-skill'>OTHER</h3>
                    <div className='icon-skill-2'>
                        <img src={gitLogo} className='img-skill' alt="GIT" />
                    </div>
            </div>

        </div>
        
      </div>
    )
  }
  export default Skill