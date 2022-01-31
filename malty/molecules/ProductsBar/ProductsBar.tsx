import { Avatar } from '@carlsberggroup/malty.atoms.avatar';
import {
  Icon,
  IconColors,
  IconNamesTypes as IconNames,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import { Color, Size, Text, Weight } from '@carlsberggroup/malty.atoms.text';
import { LinkComponentProps } from '@carlsberggroup/malty.molecules.nav-list';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { RefObject, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledAvatar,
  StyledOptionIcon,
  StyledOverlay,
  StyledProductsBar,
  StyledProfileActions,
  StyledProfileBtn,
  StyledProfileHeader,
  StyledProfileItem,
  StyledProfileMenu,
  StyledRoleLabel,
  StyledSystemMenu,
  StyledSystemOption,
  StyledSystemWrapper
} from './ProductsBar.styled';
import { ProductsBarProps, ProfileMenuProps } from './ProductsBar.types';

const LinkComponent = ({ component, href, children, componentProps }: LinkComponentProps) => {
  const CustomComponent = (component as keyof JSX.IntrinsicElements) || null;

  return (
    <>
      {
        // we need to spread props in this case in order to allow custom properties being passed to the custom component
        // eslint-disable-next-line react/jsx-props-no-spreading
        component ? <CustomComponent {...componentProps}>{children}</CustomComponent> : <a href={href}>{children}</a>
      }
    </>
  );
};

const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  open: boolean,
  setProfileMenuOpen: (open: boolean) => void
) => {
  /**
   * Detect click outside of element event
   */

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedElem = event.target as Element;
      if (ref.current && !ref.current.contains(clickedElem)) {
        if (!open) {
          return;
        }
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
};

const ProfileMenu = ({ open, setProfileMenuOpen, username, userRole, children }: ProfileMenuProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const profileMenuRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(profileMenuRef, open, setProfileMenuOpen);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!open);
  };

  return (
    <StyledProfileMenu open={open} ref={profileMenuRef} theme={theme}>
      <StyledSystemOption onClick={toggleProfileMenu} theme={theme}>
        <StyledOptionIcon theme={theme}>
          <StyledAvatar theme={theme}>
            <Avatar username={username} />
          </StyledAvatar>
        </StyledOptionIcon>
      </StyledSystemOption>
      <StyledProfileActions open={open}>
        <StyledProfileHeader theme={theme}>
          <Text size={Size.Medium} color={Color.White} weight={Weight.Bold}>
            {username}
          </Text>
          <StyledRoleLabel theme={theme}>{userRole}</StyledRoleLabel>
        </StyledProfileHeader>
        {children}
      </StyledProfileActions>
    </StyledProfileMenu>
  );
};

export const ProductsBar = ({ systemOptions, profileMenu, resetNavState }: ProductsBarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { username, userRole, profileActions } = profileMenu;
  const {
    component: singleItemComponent,
    href: singleItemHref,
    icon: singleItemIcon,
    ...singleItemCustomProps
  } = profileActions[0];

  const singleItemCompProps = { ...singleItemCustomProps };

  return (
    <StyledProductsBar theme={theme}>
      <StyledOverlay open={profileMenuOpen} theme={theme} />
      <Icon color={IconColors.White} name={IconNames.CarlsbergFilled} size={IconSizes.Medium} />
      <StyledSystemWrapper theme={theme}>
        <StyledSystemMenu theme={theme} data-testid="system-options">
          {systemOptions?.map((option) => {
            const { icon, href, component, ...customProps } = option;
            const componentProps = { ...customProps };
            return (
              <StyledSystemOption theme={theme} onClick={resetNavState}>
                <StyledOptionIcon theme={theme}>
                  <LinkComponent component={component} href={href} componentProps={componentProps}>
                    <Icon color={IconColors.White} name={IconNames[icon]} size={IconSizes.Medium} />
                  </LinkComponent>
                </StyledOptionIcon>
              </StyledSystemOption>
            );
          })}
        </StyledSystemMenu>

        {profileActions.length === 1 && (
          <StyledProfileBtn theme={theme}>
            <StyledOptionIcon theme={theme} onClick={resetNavState}>
              <LinkComponent component={singleItemComponent} href={singleItemHref} componentProps={singleItemCompProps}>
                <StyledAvatar theme={theme}>
                  <Avatar username={username} />
                </StyledAvatar>
              </LinkComponent>
            </StyledOptionIcon>
          </StyledProfileBtn>
        )}

        {profileActions.length > 1 && (
          <ProfileMenu
            open={profileMenuOpen}
            username={username}
            userRole={userRole}
            setProfileMenuOpen={setProfileMenuOpen}
          >
            <ul data-testid="profile-options">
              {profileActions.map((action) => {
                const { name = 'item', icon, component, href, ...customProps } = action;
                const componentProps = { ...customProps };

                return (
                  <StyledProfileItem theme={theme} onClick={resetNavState}>
                    <LinkComponent component={component} href={href} componentProps={componentProps}>
                      <Icon color={IconColors.White} name={IconNames[icon]} size={IconSizes.Small} />
                      <Text size={Size.MediumSmall} color={Color.White}>
                        {name}
                      </Text>
                    </LinkComponent>
                  </StyledProfileItem>
                );
              })}
            </ul>
          </ProfileMenu>
        )}
      </StyledSystemWrapper>
    </StyledProductsBar>
  );
};
