import React from "react";
import HeaderLogo from "./Assets/logoAzulBlancoHE.png";
import { HeaderElement, Logo, LogoContainer, NavContainer, NavLink } from "../../Themes/Header/Header";

const Header = () => {
    return (
        <HeaderElement>
            <LogoContainer>
                <Logo src={HeaderLogo} alt="Hound Express Logo" />
            </LogoContainer>
            <div>
                <nav>
                    <NavContainer>
                        <NavLink>
                            Inicio
                        </NavLink>
                        <NavLink>
                            Registro de Guías
                        </NavLink>
                        <NavLink>
                            Estado General
                        </NavLink>
                        <NavLink>
                            Lista de Guías
                        </NavLink>
                        <NavLink>
                            Buscar Guías
                        </NavLink>
                    </NavContainer>
                </nav>
            </div>
        </HeaderElement>
    );
};

export default Header;