import { CloneIcon, IconColor, IconSize } from '@carlsberggroup/malty.atoms.base-icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { Menu } from '@carlsberggroup/malty.icons.menu';
import { Avatar, AvatarSize } from '@carlsberggroup/malty.molecules.avatar';
import { LinkComponentProps } from '@carlsberggroup/malty.molecules.nav-list';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { RefObject, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledAvatar,
  StyledCollapseBtn,
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

  return component ? <CustomComponent {...componentProps}>{children}</CustomComponent> : <a href={href}>{children}</a>;
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

const ProfileMenu = ({
  open,
  setProfileMenuOpen,
  username,
  userRole,
  children,
  onOpenNav,
  isNavOpen = false
}: ProfileMenuProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const profileMenuRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(profileMenuRef, open, setProfileMenuOpen);

  const toggleProfileMenu = () => {
    onOpenNav();
    setProfileMenuOpen(!open);
  };

  return (
    <StyledProfileMenu open={open} ref={profileMenuRef} theme={theme}>
      <StyledSystemOption theme={theme}>
        <StyledOptionIcon theme={theme}>
          <StyledAvatar theme={theme} data-testid="avatar">
            <Avatar userName={username} size={AvatarSize.Medium} onClick={toggleProfileMenu} />
          </StyledAvatar>
        </StyledOptionIcon>
      </StyledSystemOption>
      <StyledProfileActions open={open}>
        <StyledProfileHeader theme={theme}>
          <Text textStyle={TextStyle.MediumDefault} color={TextColor.White}>
            {username}
          </Text>
          <StyledRoleLabel theme={theme}>{userRole}</StyledRoleLabel>
        </StyledProfileHeader>
        {children}
      </StyledProfileActions>
    </StyledProfileMenu>
  );
};

export const ProductsBar = ({
  systemOptions,
  profileMenu,
  resetNavState,
  onToggleNav,
  onOpenNav,
  isNavOpen
}: ProductsBarProps) => {
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
      <CarlsbergFilled color={IconColor.White} size={IconSize.Medium} />
      <StyledCollapseBtn onClick={onToggleNav} data-testid="collapse-button">
        <Menu color={IconColor.White} size={IconSize.Medium} />
      </StyledCollapseBtn>
      <StyledSystemWrapper theme={theme}>
        <StyledSystemMenu theme={theme} data-testid="system-options">
          {systemOptions?.map((option, index) => {
            const { icon, href, component, ...customProps } = option;
            const componentProps = { ...customProps };

            return (
              <StyledSystemOption theme={theme} onClick={resetNavState} key={option.key || `systemOption${index}`}>
                <StyledOptionIcon theme={theme}>
                  <LinkComponent component={component} href={href} componentProps={componentProps}>
                    <CloneIcon icon={icon} color={IconColor.White} size={IconSize.Medium} />
                  </LinkComponent>
                </StyledOptionIcon>
              </StyledSystemOption>
            );
          })}
        </StyledSystemMenu>

        {profileActions.length === 1 && (
          <StyledProfileBtn theme={theme}>
            <StyledOptionIcon theme={theme}>
              <LinkComponent component={singleItemComponent} href={singleItemHref} componentProps={singleItemCompProps}>
                <StyledAvatar theme={theme} data-testid="avatar">
                  <Avatar userName={username} size={AvatarSize.Medium} onClick={resetNavState} />
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
            onOpenNav={onOpenNav}
            isNavOpen={isNavOpen}
          >
            <ul data-testid="profile-options">
              {profileActions.map((action, index) => {
                const { name = 'item', icon, component, href, ...customProps } = action;
                const componentProps = { ...customProps };

                return (
                  <StyledProfileItem theme={theme} onClick={resetNavState} key={action.key || `profileOption${index}`}>
                    <LinkComponent component={component} href={href} componentProps={componentProps}>
                      <CloneIcon icon={icon} color={IconColor.White} size={IconSize.Medium} />
                      <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.White}>
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
