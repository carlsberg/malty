/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Card, CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Pill, PillSize } from '@carlsberggroup/malty.atoms.pill';
import { Select, SelectType } from '@carlsberggroup/malty.atoms.select';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInline, AlertInlineSize } from '@carlsberggroup/malty.molecules.alert-inline';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledAlert,
  StyledDiscountContainer,
  StyledDiscountPill,
  StyledFavoriteWrapper,
  StyledFooter,
  StyledImage,
  StyledLoyalty,
  StyledMargin,
  StyledPillWrapper,
  StyledPrice,
  StyledPriceContainer,
  StyledRow,
  StyledSelect,
  StyledStock,
  StyledStockInformation,
  StyledTitle
} from './ProductCard.styled';
import { ProductCardProps } from './ProductCard.types';

export function ProductCard({
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
}: ProductCardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth);
  const [quantityValue, setQuantityValue] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    action?.onClick();
  };
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
          {sku && (
            <StyledMargin theme={theme}>
              <Text dataQaId={`${dataTestId}-sku`} textStyle={TextStyle.SmallDefault} color={TextColor.Support80}>
                {sku}
              </Text>
            </StyledMargin>
          )}
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
          {quantitySelectOptions && (
            <StyledSelect theme={theme}>
              <Select
                placeholder={quantitySelectOptions[0].name}
                type={SelectType.Default}
                options={quantitySelectOptions}
                onValueChange={onSelectQuantityChange}
              />
            </StyledSelect>
          )}
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
                {discountPrice && (
                  <Text
                    dataQaId={`${dataTestId}-discount-price`}
                    color={discountPrice?.color}
                    textStyle={discountPrice?.style}
                  >
                    {discountPrice.label}
                  </Text>
                )}
              </StyledPriceContainer>
            ) : null}

            {loyalty ? (
              <StyledLoyalty theme={theme}>
                <Text textStyle={TextStyle.SmallBold}>{loyalty.label}</Text>
                <Image removeBackground src={loyalty.imageSrc} alt="loyalty-coin" />
              </StyledLoyalty>
            ) : null}
          </StyledRow>
          {stock ? (
            <StyledStock theme={theme}>
              <StyledStockInformation theme={theme} infoColor={stock.stockColor} />
              <Text textStyle={TextStyle.SmallBold} color={stock.labelColor}>
                {stock.label}
              </Text>
            </StyledStock>
          ) : null}

          <StyledFooter theme={theme}>
            {!hideQuantityInput && (
              <Input
                onClick={(e) => e.stopPropagation()}
                type={InputType.Quantity}
                onValueChange={(value) => handleQuantityChange(value)}
                value={quantityValue}
                max={maxQuantity}
                size={InputSize.Medium}
                maxLength={maxQuantity}
              />
            )}
            {action ? (
              <Button
                text={action?.icon ? undefined : action?.label}
                fullWidth={hideQuantityInput}
                dataTestId={`${dataTestId}-button`}
                size={ButtonSize.Medium}
                style={action.variant}
                onClick={(e) => handleActionClick(e)}
                color={action?.color}
                icon={action?.icon}
              />
            ) : null}
          </StyledFooter>
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
}
