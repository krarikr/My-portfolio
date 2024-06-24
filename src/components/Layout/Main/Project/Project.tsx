
import './Project.css'

type ImgProject = {
  id: number;
  photo: string;
  caption: string;
  description: string;
  website: string;
}

const cardImages:ImgProject[] = [
  {
    id: 0,
    photo: 'card-project img-project-1',
    caption: 'Portfolio',
    description: 'Potfoli website using react',
    website: 'https://github.com/krarikr/My-portfolio.git'
  },
  {
    id: 1,
    photo: 'card-project img-project-2',
    caption: 'Inventory',
    description: 'Inventory website using php',
    website: 'https://github.com/krarikr/Krarit_Demo_Inventory_PDO'
  },
];

function Project() {

    return (
      <div id='Project' className='project-container'>

        <div className="wrapText-project">
          <p className='p-project'>Project</p>

          <h1 className='h1-project'>My Project</h1>

          <h2 className="h2-project">
          Some things I've built with love when I was still in college.
          </h2>

        </div>
        
        <div className="wrapCard-project">

        
        {cardImages.map((cardData, index) => (
          <a href={cardData.website} target='blank' className='a-card-project'>
            <div key={index} className={cardData.photo} style={{}}>
              <h3 className="card-h3-project">{cardData.caption}</h3>
              <p className='card-p-project'>{cardData.description}</p>
            </div>
          </a>
        ))}    
        
        </div>
      
      </div>
    )
  }
  export default Project
