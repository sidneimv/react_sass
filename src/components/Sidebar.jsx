import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/eu.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Sidnei MV" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="../CSS_Selector.pdf" download="CV" target="_blank" className="btn">
        Download CV 
      </a>
    </aside>
//  <div>Sidebar</div>
  )
}

export default Sidebar
