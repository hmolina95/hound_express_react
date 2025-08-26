import React from "react";
import InstagramLogo from "./Assets/instagram_1400829.png";
import TwitterLogo from "./Assets/twitterX_12452418.png";
import FacebookLogo from "./Assets/facebook_1051309.png";
import LinkedinLogo from "./Assets/linkedin_3992560.png";
import { CopyrightText, FooterContainer, FooterNav } from "../../Themes/Footer/Footer";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterNav>
                <nav>
                    <ul>
                        <li>
                            Contáctanos
                        </li>
                        <li>
                            Políticas de privacidad
                        </li>
                        <li>
                            Preguntas frecuentes
                        </li>
                        <li>
                            <img src={InstagramLogo} alt="Instagram" />
                        </li>
                        <li>
                            <img src={TwitterLogo} alt="X-Twitter" />
                        </li>
                        <li>
                            <img src={FacebookLogo} alt="Facebook" />
                        </li>
                        <li>
                            <img src={LinkedinLogo} alt="LinkedIn" />
                        </li>
                    </ul>
                </nav>
                <CopyrightText>
                    <p>
                        <small>&copy; 2025 Hound Express. Todos los derechos reservados.</small>
                    </p>
                </CopyrightText>
            </FooterNav>
        </FooterContainer>
    )
}

export default Footer;