/* eslint-disable react/jsx-props-no-spreading */
import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Card, CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Pill, PillSize } from '@carlsberggroup/malty.atoms.pill';
import { Select, SelectType } from '@carlsberggroup/malty.atoms.select';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInline, AlertInlineSize } from '@carlsberggroup/malty.molecules.alert-inline';
import { ProductQuantityActions } from '@carlsberggroup/malty.molecules.product-quantity-actions';
import { Sku } from '@carlsberggroup/malty.molecules.sku';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  StyledPrice,
  StyledPriceContainer,
  StyledProductQuantityActionsWrapper,
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
  discountPrice,
  onInputQuantityChange = () => null,
  onSelectQuantityChange = () => null,
  onFavoriteClick = () => null,
  action = { icon: IconName.Cart, onClick: () => null, variant: ButtonStyle.Primary },
  sku,
  mro,
  loyalty,
  stock,
  maxQuantity,
  productsCardsAlerts,
  quantitySelectOptions,
  hideQuantityInput,
  discountPill,
  promoPill,
  cartPill,
  favoriteIconColor = IconColor.DigitalBlack
}: ProductCardProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth);
  const [quantityValue, setQuantityValue] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleQuantityChange = (value: string) => {
    onInputQuantityChange(value);
    setQuantityValue(value);
  };
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
                      color={discountPill?.color}
                      size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                      icon={discountPill?.icon}
                    />
                  </StyledDiscountPill>
                ) : null}

                {promoPill ? (
                  <Pill
                    text={promoPill?.text}
                    color={promoPill?.color}
                    size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                    icon={promoPill?.icon}
                  />
                ) : null}
              </StyledDiscountContainer>
              {cartPill ? (
                <Pill
                  text={cartPill?.text}
                  color={cartPill?.color}
                  size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                  icon={cartPill?.icon}
                />
              ) : null}
            </StyledPillWrapper>
            <StyledFavoriteWrapper theme={theme}>
              <Icon
                onClick={handleFavoriteClick}
                name={favorite ? IconName.HeartFilled : IconName.Heart}
                color={favoriteIconColor}
                size={IconSize.MediumSmall}
              />
            </StyledFavoriteWrapper>
          </>
        </StyledImage>
      }
      cardBody={
        <>
          {sku ? (
            <StyledMargin theme={theme}>
              <Sku sku={sku} mro={mro} dataTestId={dataTestId} />
            </StyledMargin>
          ) : null}
          <StyledMargin theme={theme}>
            <StyledTitle
              showCursor={!!onProductClick}
              onClick={onProductClick}
              dataQaId={`${dataTestId}-title`}
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
            {price || discountPrice ? (
              <StyledPriceContainer theme={theme}>
                {price ? (
                  <StyledPrice
                    theme={theme}
                    discountPrice={!!discountPrice?.label}
                    dataQaId={`${dataTestId}-price`}
                    color={price?.color}
                    textStyle={price?.style}
                  >
                    {price.label}
                  </StyledPrice>
                ) : null}
                {discountPrice ? (
                  <Text
                    dataQaId={`${dataTestId}-discount-price`}
                    color={discountPrice?.color}
                    textStyle={discountPrice?.style}
                  >
                    {discountPrice.label}
                  </Text>
                ) : null}
              </StyledPriceContainer>
            ) : null}

            {loyalty ? (
              <StyledLoyalty theme={theme}>
                <Text textStyle={TextStyle.SmallBold}>{loyalty.label}</Text>
                <Image removeBackground src={loyalty.imageSrc} alt="loyalty-coin" />
              </StyledLoyalty>
            ) : null}
          </StyledRow>

          <StyledProductQuantityActionsWrapper theme={theme}>
            <ProductQuantityActions
              stock={stock}
              action={action}
              value={quantityValue}
              hideQuantityInput={hideQuantityInput}
              maxQuantity={maxQuantity}
              onInputQuantityChange={handleQuantityChange}
            />
          </StyledProductQuantityActionsWrapper>
          {productsCardsAlerts?.map((alert, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledAlert key={index} theme={theme}>
              <AlertInline {...alert} color={alert.color} size={AlertInlineSize.Compact} message={alert.message} />
            </StyledAlert>
          ))}
        </>
      }
    />
  );
};
