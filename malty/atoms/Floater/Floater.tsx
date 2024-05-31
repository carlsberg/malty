import { CloneIcon, IconColor, IconSize } from '@carlsberggbs/malty.atoms.base-icon';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { FloaterIconPosition, FloaterProps } from '.';
import { StyledFloaterButton } from './Floater.styled';
import { FloaterColor } from './Floater.types';

export const Floater = ({
  text,
  onClick,
  icon,
  iconPos = FloaterIconPosition.Right,
  scroll,
  negative,
  tabIndex = -1,
  dataTestId,
  children,
  color = FloaterColor.DigitalBlack,
  ...props
}: FloaterProps) => {
  let iconColor;
  const theme = useContext(ThemeContext) || defaultTheme;
  const [showButton, setShowButton] = useState(true);

  switch (color) {
    case FloaterColor.ThemePrimary:
      iconColor = IconColor.White;
      if (negative) {
        iconColor = IconColor.Primary;
      }
      break;
    case FloaterColor.ThemeSecondary:
      iconColor = IconColor.White;
      if (negative) {
        iconColor = IconColor.Secondary;
      }
      break;
    case FloaterColor.ThemeTertiary:
      iconColor = IconColor.White;
      if (negative) {
        iconColor = IconColor.Tertiary;
      }
      break;

    default:
      iconColor = negative ? IconColor.DigitalBlack : IconColor.White;
      break;
  }

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (!!scroll && st > scroll) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    if (scroll) {
      setShowButton(false);
      document.addEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const renderedIcon = <CloneIcon icon={icon} color={iconColor} size={IconSize.Medium} />;

  return (
    <StyledFloaterButton
      color={color}
      data-testid={dataTestId}
      type="button"
      hasText={!!text}
      hasIcon={!!icon}
      onClick={onClick ?? (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
      isNegative={negative}
      iconPos={iconPos}
      theme={theme}
      showButton={showButton}
      tabIndex={tabIndex}
      {...props}
    >
      <div className="text-container">
        {iconPos === FloaterIconPosition.Left && renderedIcon}
        {text || children}
        {iconPos === FloaterIconPosition.Right && renderedIcon}
      </div>
    </StyledFloaterButton>
  );
};
