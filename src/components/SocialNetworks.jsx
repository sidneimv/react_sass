import { FaLinkedinIn, FaGithub, FaInstagram} from  "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [ 
    {name: "linkedin",  icon: <FaLinkedinIn />, text_link: "https://www.linkedin.com/in/sidneimv"},
    {name: "github",    icon: <FaGithub />,     text_link: "http://www.github.com/sidneimv"},
    {name: "instagram", icon: <FaInstagram />,  text_link: "http://www.instagram.com/sidneimv"},
] 

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.text_link} className="social-btn" id={network.name} key={network.name}
         target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks
