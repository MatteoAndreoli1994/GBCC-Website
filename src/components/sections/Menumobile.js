import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import CustomConnectButtonMobile from '../sections/CustomConnectButtonMobile';

// Main container
const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 200;
  padding: 120px 30px 30px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
  user-select: none;
  touch-action: none;
  pointer-events: all;
`;

const WalletSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItemContainer = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 20px; /* Default */
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) { /* Telefono piccolo */
    font-size: 18px;
  }

  @media (max-width: 360px) { /* Telefono molto piccolo */
    font-size: 16px;
  }
`;

const SubMenuItemContainer = styled.div`
  padding: 12px 0 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 18px; /* Default */
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 480px) { /* Telefono piccolo */
    font-size: 16px;
  }

  @media (max-width: 360px) { /* Telefono molto piccolo */
    font-size: 14px;
  }
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #777;
  font-size: 12px; /* Default */
  line-height: 1.5;

  @media (max-width: 480px) { /* Telefono piccolo */
    font-size: 10px;
  }

  @media (max-width: 360px) { /* Telefono molto piccolo */
    font-size: 9px;
  }
`;


const MobileMenuContent = ({ onClose, onNavigate }) => {
  const [showSocialSubmenu, setShowSocialSubmenu] = useState(false);

  useEffect(() => {
    const disableScroll = (event) => {
      event.preventDefault();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", disableScroll, { passive: false });
    window.addEventListener("touchmove", disableScroll, { passive: false });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, []);

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "$GBCC", id: "token" },
    { label: "STAKING", id: "staking" },
    {
      label: "SOCIALS",
      id: "socials",
      hasSubmenu: true,
      subItems: [
        { label: "TELEGRAM", id: "telegram", url: "https://t.me/GBCCNFT" },
        { label: "X", id: "x", url: "https://x.com/GBCCNFT" }
      ]
    },
  ];

  const handleSocialsClick = () => {
    setShowSocialSubmenu(!showSocialSubmenu);
  };

  const handleSubItemClick = (url) => {
    window.open(url, '_blank');
  };

  const handleItemClick = (item) => {
    if (item.id === "staking") {
      window.open("https://www.gameboyzcolorclub.com/leveling", "_blank");
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <MobileMenuContainer>
    <WalletSection>
      <CustomConnectButtonMobile />
    </WalletSection>

    {menuItems.map((item) => (
      <React.Fragment key={item.id}>
        <MenuItemContainer
          onClick={item.hasSubmenu ? handleSocialsClick : () => handleItemClick(item)}
        >
          {item.label}
          {item.hasSubmenu && (showSocialSubmenu ? <FaChevronDown /> : <FaChevronRight />)}
        </MenuItemContainer>

        {item.hasSubmenu && showSocialSubmenu && item.subItems.map(subItem => (
          <SubMenuItemContainer
            key={subItem.id}
            onClick={() => handleSubItemClick(subItem.url)}
          >
            {subItem.label}
          </SubMenuItemContainer>
        ))}
      </React.Fragment>
    ))}

    <FooterText>
      LICENSE<br />
      TERMS & CONDITIONS<br /><br />
      MATTEO LABS, INC © 2025<br />
      MADE IN ITALY, IT<br />
    </FooterText>
  </MobileMenuContainer>
  );
};

export default MobileMenuContent;