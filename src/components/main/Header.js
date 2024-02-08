import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import logoSVG from '../../assets/logo.png';
import '../../styles/Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <header className="announcement">
        <Text color="white">El descanso que tu cachorro se merece ♥</Text>
      </header>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        className={isScrolled ? 'header scrolled' : 'header'}
        bg='white'
      >
        <Box></Box>
        <Flex alignItems="center" className="nav">
          <Box className="logo">
            <Image src={logoSVG} alt="Logo" className={isScrolled ? 'shrink' : ''} />
          </Box>
          <Flex as="ul" listStyleType="none" padding="0" margin="0">
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Resistentes
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Higiénicas
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Cómodas
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Customizables
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Cama Sinker
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                Cama Setté
              </a>
            </Text>
          </Flex>
        </Flex>

        <Flex className="nav">
          <Flex as="ul" listStyleType="none" padding="0" margin="0">
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaSearch />
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <CgProfile />
              </a>
            </Text>
            <Text as="li" margin="0 10px">
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaShoppingCart />
              </a>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
