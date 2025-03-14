import React, { useState } from 'react';
import styled from "styled-components";
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import CustomConnectButtonMobile from '../sections/CustomConnectButtonMobile';

// Main container
// Main container
const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh; /* Usa 100dvh per considerare la UI mobile */
  z-index: 200;
  padding: 120px 30px 30px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
  overflow-y: auto; /* Permette lo scroll del menu ma non del contenuto sottostante */
`;

// Wallet section
const WalletSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Menu items
const MenuItemContainer = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 22px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

// Submenu items - now with a smaller font size
const SubMenuItemContainer = styled.div`
  padding: 12px 0 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 18px; /* Reduced font size for subcategories */
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// Footer text
const FooterText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: #777;
  font-size: 12px;
  line-height: 1.5;
`;

const MobileMenuContent = ({ onClose, onNavigate }) => {
  const [showSocialSubmenu, setShowSocialSubmenu] = useState(false);

  const menuItems = [
    { label: "ABOUT", id: "about" },
    { label: "$GBCC", id: "token" },
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

  return (
    <MobileMenuContainer>
      {/* Connect Wallet section */}
      <WalletSection>
        <CustomConnectButtonMobile />
      </WalletSection>

      {/* Menu items */}
      {menuItems.map((item) => (
        <React.Fragment key={item.id}>
          <MenuItemContainer 
            onClick={item.hasSubmenu ? 
              handleSocialsClick : 
              () => onNavigate(item.id)
            }
          >
            {item.label}
            {item.hasSubmenu && (
              showSocialSubmenu ? <FaChevronDown /> : <FaChevronRight />
            )}
          </MenuItemContainer>
          
          {/* Render submenu items if this item has a submenu and it's expanded */}
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

      {/* Footer information */}
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
