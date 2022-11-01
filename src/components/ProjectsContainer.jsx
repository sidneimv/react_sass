import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima tempore, voluptas dolores ducimus praesentium 
        voluptates ab provident iste, culpa ullam eveniet labore, impedit quas repellendus expedita. Iste, cum possimus.
      </p>
      {/* 
      <a href="#" className="btn">
        Ver Projetos
      </a> 
       
      <div>
        <a href="../img/w3logo.jpg" download="w3logo" className='btn'>
          Ver Projetos
          <img src="../img/w3logo.jpg" alt="W3Schools" width="104" height="142" /> 
        </a>  
      </div>
      */} 
      
      <div>
        <iframe width="320" height="240"
          src="https://www.youtube.com/embed/epiyExCyb2s?autoplay=1&mute=1&controls=1">
        </iframe> 
      </div>
    </section>
  )
}

export default ProjectsContainer
