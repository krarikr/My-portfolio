import './Main.css'
import Skill from './Skill/Skill'
import Project from './Project/Project'
import Contact from './Contact/Contact'

function Main() {

    return (
      <div className='main-container'>
        <Skill/>
        <hr/>
        <Project/>
        <hr/>
        <Contact/>
      </div>
    )
  }
  export default Main