import { Icon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  color = FloaterColor.DigitalBlack
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

  return (
    <TypographyProvider>
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
      >
        <div className="text-container">
          {icon && iconPos === FloaterIconPosition.Left && (
            <Icon name={icon} color={iconColor} size={IconSize.Medium} />
          )}
          {text || children}
          {icon && iconPos === FloaterIconPosition.Right && (
            <Icon name={icon} color={iconColor} size={IconSize.Medium} />
          )}
        </div>
      </StyledFloaterButton>
    </TypographyProvider>
  );
};
