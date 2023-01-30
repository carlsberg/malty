import { Button, ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Card, CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { Headline, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledBody, StyledFooter, StyledImage, StyledMargin } from './ArticleCard.styled';
import { ArticleCardProps } from './ArticleCard.types';

export function ArticleCard({
  orientation = CardOrientation.Portrait,
  cardStyle = CardStyle.Plain,
  onCardClick,
  title,
  description,
  date,
  imageSrc,
  action,
  dataTestId,
  imageHeight,
  imageWidth
}: ArticleCardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth || (orientation === CardOrientation.Landscape ? '180px' : undefined));

  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    action?.onClick();
  };

  return (
    <article>
      <Card
        dataTestId={dataTestId}
        cardStyle={cardStyle}
        orientation={orientation}
        onClick={onCardClick}
        cardHero={<StyledImage cover orientation={orientation} src={imageSrc} alt="" height={height} width={width} />}
        cardBody={
          <StyledBody theme={theme}>
            <StyledMargin theme={theme}>
              <Headline dataTestId={`${dataTestId}-title`} headlineStyle={HeadlineStyle.MediumLarge}>
                {title}
              </Headline>
            </StyledMargin>
            {description && (
              <Text dataQaId={`${dataTestId}-subTitle`} textStyle={TextStyle.MediumSmallDefault}>
                {description}
              </Text>
            )}
            <StyledFooter theme={theme}>
              {date && (
                <Text dataQaId={`${dataTestId}-date`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
                  {date}
                </Text>
              )}
              {action && (
                <Button
                  dataTestId={`${dataTestId}-button`}
                  size={ButtonSize.Medium}
                  style={action.variant}
                  onClick={(e) => handleActionClick(e)}
                  color={action.color}
                >
                  {action.label}
                </Button>
              )}
            </StyledFooter>
          </StyledBody>
        }
      />
    </article>
  );
}
