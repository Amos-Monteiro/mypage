import { FaPhone, FaEnvelope,  FaMapPin } from 'react-icons/fa';


import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (

    <section id='information'>
        <div className='info-card'>
            <FaPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(81)97116-7384</p>
            </div>

        </div>

        <div className='info-card'>
            <FaEnvelope id='email-icon'/>
            <div>
                <h3>Email</h3>
                <p>amos.pedro1@gmail.com</p>
            </div>
            
        </div>

        <div className='info-card'>
            < FaMapPin id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Recife / PE </p>
            </div>
            
        </div>

    </section>
  )
}

export default InformationContainer;