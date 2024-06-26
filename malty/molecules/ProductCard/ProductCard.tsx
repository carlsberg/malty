import { IconColor, IconSize } from '@carlsberggbs/malty.atoms.base-icon';
import { Card, CardOrientation, CardStyle } from '@carlsberggbs/malty.atoms.card';
import { Image } from '@carlsberggbs/malty.atoms.image';
import { Pill, PillSize } from '@carlsberggbs/malty.atoms.pill';
import { Price } from '@carlsberggbs/malty.atoms.price';
import { Select, SelectType } from '@carlsberggbs/malty.atoms.select';
import { Text, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { Heart } from '@carlsberggbs/malty.icons.heart';
import { HeartFilled } from '@carlsberggbs/malty.icons.heart-filled';
import { AlertInline, AlertInlineSize } from '@carlsberggbs/malty.molecules.alert-inline';
import { ProductQuantityActions } from '@carlsberggbs/malty.molecules.product-quantity-actions';
import { Sku } from '@carlsberggbs/malty.molecules.sku';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledAlert,
  StyledDiscountContainer,
  StyledDiscountPill,
  StyledFavoriteWrapper,
  StyledImage,
  StyledLoyalty,
  StyledMargin,
  StyledPillWrapper,
  StyledRow,
  StyledSelect,
  StyledTitle
} from './ProductCard.styled';
import { ProductCardProps } from './ProductCard.types';

export const ProductCard = ({
  dataTestId,
  onProductClick,
  orientation = CardOrientation.Portrait,
  productCardStyle = CardStyle.Plain,
  imageSrc,
  imageHeight,
  imageWidth,
  title,
  price,
  onSelectQuantityChange = () => null,
  onFavoriteClick = () => null,
  actionQuantityInput,
  actionButton,
  sku,
  mro,
  loyalty,
  stock,
  productsCardsAlerts,
  quantitySelectOptions,
  discountPill,
  promoPill,
  cartPill,
  favoriteIconColor = IconColor.DigitalBlack,
  ...props
}: ProductCardProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth);
  const [favorite, setFavorite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onFavoriteClick(favorite);
  };

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const renderFavouriteIcon = () => {
    const iconProps = {
      onClick: handleFavoriteClick,
      color: favoriteIconColor,
      size: IconSize.MediumSmall
    };

    return favorite ? (
      <HeartFilled {...iconProps} ariaLabel="Mark as not favourite" />
    ) : (
      <Heart {...iconProps} ariaLabel="Mark as favourite" />
    );
  };

  return (
    <Card
      dataTestId={dataTestId}
      cardStyle={productCardStyle}
      orientation={orientation}
      cardHero={
        <StyledImage
          showCursor={!!onProductClick}
          onClick={onProductClick}
          theme={theme}
          orientation={orientation}
          src={imageSrc}
          alt=""
          height={height}
          width={width}
        >
          <>
            <StyledPillWrapper theme={theme}>
              <StyledDiscountContainer theme={theme}>
                {discountPill ? (
                  <StyledDiscountPill theme={theme}>
                    <Pill
                      text={discountPill?.text}
                      type={discountPill?.type}
                      size={isMobile ? PillSize.XS : PillSize.S}
                      icon={discountPill?.icon}
                    />
                  </StyledDiscountPill>
                ) : null}

                {promoPill ? (
                  <Pill
                    text={promoPill?.text}
                    type={promoPill?.type}
                    size={isMobile ? PillSize.XS : PillSize.S}
                    icon={promoPill?.icon}
                  />
                ) : null}
              </StyledDiscountContainer>
              {cartPill ? (
                <Pill
                  text={cartPill?.text}
                  type={cartPill?.type}
                  size={isMobile ? PillSize.XS : PillSize.S}
                  icon={cartPill?.icon}
                />
              ) : null}
            </StyledPillWrapper>
            <StyledFavoriteWrapper theme={theme}>{renderFavouriteIcon()}</StyledFavoriteWrapper>
          </>
        </StyledImage>
      }
      cardBody={
        <>
          {sku ? <Sku sku={sku} mro={mro} dataTestId={dataTestId} /> : null}
          <StyledMargin theme={theme}>
            <StyledTitle
              showCursor={!!onProductClick}
              onClick={onProductClick}
              dataTestId={`${dataTestId}-title`}
              textStyle={TextStyle.MediumSmallBold}
            >
              {title}
            </StyledTitle>
          </StyledMargin>
          {quantitySelectOptions ? (
            <StyledSelect theme={theme}>
              <Select
                placeholder={quantitySelectOptions[0].name}
                type={SelectType.Default}
                options={quantitySelectOptions}
                onValueChange={onSelectQuantityChange}
              />
            </StyledSelect>
          ) : null}
          <StyledRow theme={theme}>
            {price ? <Price {...price} dataTestId={dataTestId} /> : null}

            {loyalty ? (
              <StyledLoyalty theme={theme}>
                <Text textStyle={TextStyle.SmallBold}>{loyalty.label}</Text>
                <Image height="18" width="18" removeBackground src={loyalty.imageSrc} alt="loyalty-coin" />
              </StyledLoyalty>
            ) : null}
          </StyledRow>

          <ProductQuantityActions stock={stock} actionButton={actionButton} actionQuantityInput={actionQuantityInput} />
          {productsCardsAlerts?.map((alert, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledAlert key={index} theme={theme}>
              <AlertInline {...alert} color={alert.color} size={AlertInlineSize.Compact} message={alert.message} />
            </StyledAlert>
          ))}
        </>
      }
      {...props}
    />
  );
};
