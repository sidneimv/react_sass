import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import WhatsApp from "../img/whatsapp.png"

import "../styles/components/informationcontainer.sass"

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <a href="https://api.whatsapp.com/send?phone=5511957728485" target="_blank" title="Abrir no WhatsApp">
            (11)95772-8485
          </a>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>e-Mail</h3>
          <a href="mailto:sidneimv@gmail.com">sidneimv@gmail</a>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <a href="https://goo.gl/maps/uv4a3bG3nhELsedQ6" target="_blank" alt="Maps" title="Abrir no Google Maps">
            Praia Grande - SP
          </a>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer
