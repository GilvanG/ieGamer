import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  faBars, faHeadset, faShoppingBag, faTimes, faUser, faUserCircle, faBookmark, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderContainer, Menu } from './style';

const Header = ({ children }) => {
  const name = 'Jose';
  const logado = false;
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  return (
    <HeaderContainer>
      <Menu.Button onClick={() => setVisibilityMenu(true)}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ paddingRight: '.5rem', marginBottom: '.3rem' }}
        />
      </Menu.Button>
      {' '}
      {children}
      {visibilityMenu
        ? (
          <Menu.OpenContainer>
            <Menu.Open>
              {logado ? (
                <Menu.Title>
                  <Menu.IconOption>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                    />
                  </Menu.IconOption>
                  Olá,
                  {' '}
                  {name}
                  !
                </Menu.Title>
              ) : (
                <Menu.Title>
                  <Menu.IconOption>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                    />
                  </Menu.IconOption>
                  Seja, Bem Vindo!
                </Menu.Title>
              ) }
              <hr />
              <Menu.Option>
                <Menu.IconOption>
                  <FontAwesomeIcon
                    icon={faUser}
                  />
                </Menu.IconOption>
                Minha Conta
              </Menu.Option>
              <Menu.Option>
                <Menu.IconOption>
                  <FontAwesomeIcon
                    icon={faBookmark}
                  />
                </Menu.IconOption>
                Lista de Desejos
              </Menu.Option>
              <Menu.Option>
                <Menu.IconOption>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                  />
                </Menu.IconOption>
                Meus Pedidos
              </Menu.Option>
              <Menu.Option>
                <Menu.IconOption>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                  />
                </Menu.IconOption>
                Quem Somos
              </Menu.Option>
              <Menu.Option>
                <Menu.IconOption>
                  <FontAwesomeIcon
                    icon={faHeadset}
                  />
                </Menu.IconOption>
                Atendimento
              </Menu.Option>
              <Menu.Close>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setVisibilityMenu(false)}
                />
              </Menu.Close>
            </Menu.Open>
          </Menu.OpenContainer>
        )
        : <></>}
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          position: 'absolute', right: '2%', paddingBottom: '1vh', paddingTop: '1vh',
        }}
      />
    </HeaderContainer>
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
