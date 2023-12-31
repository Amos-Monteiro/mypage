import {FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetwork.sass';

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, URL: "https://www.linkedin.com/in/am%C3%B3s-monteiro-91a643250/"},
    {name: "github", icon: <FaGithub/>,  URL:"https://github.com/Amos-Monteiro"},
    {name:"instagram", icon: <FaInstagram/>,  URL: "https://www.instagram.com/amos.montero/" },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks' >
        {socialNetworks.map((network) =>(
            <a href={network.URL} className='social-btn' id={network.name} key={network.name} target="blank"> 
            {network.icon} 
            </a>
        ))}
    </section>
    ) 
}

export default SocialNetworks;