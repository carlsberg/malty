import { Button, ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Card, CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { Input, InputType } from '@carlsberggroup/malty.atoms.input';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledBody,
  StyledFooter,
  StyledImage,
  StyledLoyalty,
  StyledMargin,
  StyledPrice,
  StyledPriceContainer,
  StyledRow
} from './ProductCard.styled';
import { ProductCardProps } from './ProductCard.types';

export function ProductCard({
  dataTestId,
  onCardClick,
  orientation = CardOrientation.Portrait,
  productCardStyle = CardStyle.Plain,
  imageSrc,
  imageHeight,
  imageWidth,
  title,
  price,
  discountPrice,
  onQuantityChange = () => null,
  action,
  sku,
  loyalty
}: ProductCardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth || (orientation === CardOrientation.Landscape ? '180px' : undefined));
  const [quantityValue, setQuantityValue] = useState('');

  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    action?.onClick();
  };
  const handleQuantityChange = (value: string) => {
    onQuantityChange(value);
    setQuantityValue(value);
  };
  const handleQuantityClick = (event?: React.MouseEvent<MouseEvent, MouseEvent>) => {
    event?.stopPropagation();
  };
  return (
    <Card
      dataTestId={dataTestId}
      cardStyle={productCardStyle}
      orientation={orientation}
      onClick={onCardClick}
      cardHero={<StyledImage cover orientation={orientation} src={imageSrc} alt="" height={height} width={width} />}
      cardBody={
        <StyledBody theme={theme}>
          {sku && (
            <StyledMargin theme={theme}>
              <Text dataQaId={`${dataTestId}-sku`} textStyle={TextStyle.SmallDefault} color={TextColor.Support80}>
                {sku}
              </Text>
            </StyledMargin>
          )}
          <StyledMargin theme={theme}>
            <Text dataQaId={`${dataTestId}-title`} textStyle={TextStyle.MediumSmallBold}>
              {title}
            </Text>
          </StyledMargin>
          <StyledRow>
            <StyledPriceContainer>
              {price && (
                <StyledPrice
                  discountPrice={!!discountPrice?.label}
                  dataQaId={`${dataTestId}-price`}
                  color={price?.color}
                  textStyle={price?.style}
                >
                  {price.label}
                </StyledPrice>
              )}
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
            {loyalty && (
              <StyledLoyalty>
                <Text textStyle={TextStyle.SmallBold}>{loyalty.label}</Text>
              </StyledLoyalty>
            )}
          </StyledRow>

          <StyledFooter theme={theme}>
            <Input
              onClick={(e) => e.stopPropagation()}
              type={InputType.Quantity}
              onValueChange={(value) => handleQuantityChange(value)}
              value={quantityValue}
            />
            {action && (
              <Button
                dataTestId={`${dataTestId}-button`}
                size={ButtonSize.Medium}
                style={action.variant}
                onClick={(e) => handleActionClick(e)}
                color={action?.color}
                icon={action?.icon}
              >
                {action.label}
              </Button>
            )}
          </StyledFooter>
        </StyledBody>
      }
    />
  );
}
