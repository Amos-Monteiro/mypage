import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';


import Avatar from '../img/amos-foto.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {

    return (
        <aside id="Sidebar">
            <img  src={Avatar} alt="Amós foto"/>
            <p className="title"> Desenvolvedor </p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="https://drive.google.com/file/d/19L4iTeU3Pssphy1A4ebYMajxICRfU2t1/view?usp=sharing" className="btn" download="amosCurriculo" target='blank'>Download Curriculo</a>

        </aside>
    )
}

export default Sidebar;