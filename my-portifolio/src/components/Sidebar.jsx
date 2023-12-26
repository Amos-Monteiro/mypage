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
            <a href="https://drive.google.com/file/d/1eyTEHqoDSawa246M3JtOkCk3p_MOWzLc/view?usp=sharing" className="btn" download="amosCurriculo" target='blank'>Download Curriculo</a>

        </aside>
    )
}

export default Sidebar;