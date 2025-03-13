import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Animazioni
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  user-select: none;

  backdrop-filter: blur(10px);
  border-radius: 16px;

`;

const CardContainer = styled.div`
  position: relative;
  width: 394px; // 280 * 1.4
  height: 588px; // 420 * 1.4
  margin-bottom: 2rem;
  perspective: 1000px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s ease-out;
  background-color: ${props => props.bgColor || 'white'};
  transform: ${props => props.transform || 'none'};
  opacity: ${props => props.opacity || 1};
  z-index: ${props => props.zIndex || 1};
  display: ${props => (props.isVisible ? 'block' : 'none')};
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const CardContent = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const Year = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const Star = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const Description = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(229, 231, 235, 0.5);
  margin: 0.25rem 0;
`;

const Subtitle = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text || '#374151'};
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${props => props.theme.text || '#111827'};
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: ${props => props.bgColor || '#1e3a8a'};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  src: 'https://example.com/generic-image.jpg';
  user-select: auto; /* Image is now selectable */
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Category = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: ${props => props.bgColor || 'rgba(254, 243, 199, 1)'};
  color: ${props => props.textColor || 'rgba(146, 64, 14, 1)'};
`;

const QRCode = styled.div`
  width: 4rem;
  height: 2rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QRInner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #d1d5db;
  border-radius: 0.25rem;
`;

const DotContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Dot = styled.button`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#3b82f6' : '#9ca3af')};
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Instructions = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.text || 'rgba(156, 163, 175, 0.8)'};
`;

// Componente mascotte per la prima carta
const Mascot = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OuterCircle = styled.div`
  height: 8rem;
  width: 8rem;
  background-color: #1e40af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleCircle = styled.div`
  height: 6rem;
  width: 6rem;
  background-color: #1e4ed8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PinkDot = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-color: #ec4899;
  border-radius: 50%;
  position: absolute;
  bottom: 1.25rem;
  left: 0.75rem;
`;

const BlueLight = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: #93c5fd;
  border-radius: 50%;
`;

const Character = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 5rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 2.5rem 2.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Visor = styled.div`
  width: 2rem;
  height: 1rem;
  background-color: black;
  border-radius: 1rem 1rem 0 0;
  margin-top: 0.5rem;
`;

const Eyes = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Eye = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fdba74;
  border-radius: 50%;
`;

const Body = styled.div`
  width: 5rem;
  height: 4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.div`
  width: 3rem;
  height: 2rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeText = styled.div`
  color: #ef4444;
  font-size: 0.625rem;
  font-weight: bold;
`;

const CardStackVisualizer = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: '前卫勇敢的探险家',
      subtitle: '我的专属形象',
      year: '2022',
      description: '喜小帅迎新年',
      category: '传说',
      color: 'white',
      textColor: '#111827',
      categoryBg: 'rgba(254, 243, 199, 1)',
      categoryText: 'rgba(146, 64, 14, 1)'
    },
    {
      id: 2, 
      title: '温暖',
      subtitle: '温馨描述',
      year: '2022',
      description: '喜小帅迎新年',
      category: '推荐',
      color: '#fef3c7',
      textColor: '#111827',
      categoryBg: 'rgba(209, 250, 229, 0.4)',
      categoryText: 'rgba(6, 95, 70, 1)'
    },
    {
      id: 3,
      title: '浪漫',
      subtitle: '浪漫描述',
      year: '2022',
      description: '喜小帅迎新年',
      category: '推荐',
      color: '#d1fae5',
      textColor: '#111827',
      categoryBg: 'rgba(254, 226, 226, 0.4)',
      categoryText: 'rgba(153, 27, 27, 1)'
    },
    {
      id: 4,
      title: '对人',
      subtitle: '对人描述',
      year: '2022',
      description: '喜小帅迎新年',
      category: '推荐',
      color: '#fee2e2',
      textColor: '#111827',
      categoryBg: 'rgba(219, 234, 254, 0.4)',
      categoryText: 'rgba(30, 58, 138, 1)'
    },
    {
      id: 5,
      title: '家党',
      subtitle: '家党描述',
      year: '2022',
      description: '喜小帅迎新年',
      category: '神话',
      color: '#dbeafe',
      textColor: '#111827',
      categoryBg: 'rgba(237, 233, 254, 0.4)',
      categoryText: 'rgba(91, 33, 182, 1)'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const cardContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentY = e.clientY;
    const diff = startY - currentY;
    setOffsetY(diff);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;
    setOffsetY(diff);
    
    // Prevent page scrolling when swiping cards
    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const finishDrag = () => {
    setIsDragging(false);
    
    // If dragged up significantly, move to next card
    if (offsetY > 50 && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    // If dragged down significantly, move to previous card
    if (offsetY < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    setOffsetY(0);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, offsetY, currentIndex]);

  // Prevent default touchmove behavior to avoid page scrolling
  useEffect(() => {
    const container = cardContainerRef.current;
    const preventDefault = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    
    if (container) {
      container.addEventListener('touchmove', preventDefault, { passive: false });
      
      return () => {
        container.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isDragging]);

  const calculateCardStyle = (index) => {
    const indexDiff = index - currentIndex;
    const isCurrentCard = indexDiff === 0;
    
    // Base positioning
    const baseZIndex = 20 - Math.abs(indexDiff);
    const baseRotation = 0;
    const baseScale = 1 - (Math.abs(indexDiff) * 0.05);
    const baseOpacity = 1 - (Math.abs(indexDiff) * 0.2);
    
    // Offset cards horizontally to create the stacked appearance
    let translateX = 0;
    let translateY = 0;
    
    if (indexDiff < 0) {
      // Cards before current (to the left)
      translateX = -20 * Math.abs(indexDiff);
      translateY = 10 * Math.abs(indexDiff);
    } else if (indexDiff > 0) {
      // Cards after current (to the right)
      translateX = 20 * Math.abs(indexDiff);
      translateY = 10 * Math.abs(indexDiff);
    }
    
    // Apply drag offset only to current card
    if (isCurrentCard && isDragging) {
      translateY -= offsetY / 10;
    }
    
    // Visibility control - show only a few cards before and after
    const isVisible = Math.abs(indexDiff) <= 2;
    
    return {
      zIndex: baseZIndex,
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${baseScale}) rotate(${baseRotation}deg)`,
      opacity: isVisible ? baseOpacity : 0,
      isVisible: isVisible
    };
  };

  return (
    <Container>
      <CardContainer
        ref={cardContainerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {cards.map((card, index) => {
          const style = calculateCardStyle(index);
          
          return (
            <Card
              key={card.id}
              bgColor={card.color}
              transform={style.transform}
              opacity={style.opacity}
              zIndex={style.zIndex}
              isVisible={style.isVisible}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <CardContent>
                <CardHeader>
                  <Year>{card.year}</Year>
                  <Star>★</Star>
                </CardHeader>
                
                <Description>{card.description}</Description>
                
                <Divider />
                
                <Subtitle>{card.subtitle}</Subtitle>
                
                <Title>{card.title}</Title>
                
                <ImageContainer bgColor={index === 0 ? '#1e3a8a' : undefined}>

                <CardImage src={card.image || 'https://www.libereta.it/test/wp-content/uploads/2022/06/paesaggio.jpg'} />
            
                </ImageContainer>
                
                <CardFooter>
                  <Category bgColor={card.categoryBg} textColor={card.categoryText}>
                    {card.category}
                  </Category>
                  <QRCode>
                    <QRInner />
                  </QRCode>
                </CardFooter>
              </CardContent>
            </Card>
          );
        })}
      </CardContainer>
      
      <DotContainer>
        {cards.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotContainer>
      

    </Container>
  );
};

export default CardStackVisualizer;