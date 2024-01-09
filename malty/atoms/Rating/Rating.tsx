import { Text, TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { IconColor, Star } from '@carlsberggroup/malty.icons.star';
import { StarFilled } from '@carlsberggroup/malty.icons.star-filled';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledIconStarContainer,
  StyledInput,
  StyledLabel,
  StyledMainContainer,
  StyledRatingContainer,
  StyledStarContainer,
  StyledTotalReviewContainer
} from './Rating.styled';
import { RatingProps } from './Rating.types';

export const Rating = ({
  name,
  label,
  value,
  readOnly = false,
  disabled = false,
  totalReview,
  onStarClick,
  dataTestId,
  ...props
}: RatingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [ratingValue, setRatingValue] = useState(value);
  const [hoverRating, setHoverRating] = useState(0);

  const onChange = (inputValue: number) => {
    if (readOnly || disabled) {
      return;
    }

    setRatingValue(inputValue);
  };

  const handleStarClick = (
    index: number,
    val: number,
    named: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (readOnly || disabled) {
      return;
    }

    onStarClick?.(index, val, named, e);
  };

  const handleStarHover = (index: number, e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    e.stopPropagation();

    if (readOnly || disabled) {
      return;
    }

    setHoverRating(index);
  };

  const handleStarHoverOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (readOnly || disabled) {
      return;
    }

    setHoverRating(0);
  };

  const renderStars = (): JSX.Element[] | null => {
    // populate stars
    const starNodes = [];

    for (let i = 5; i > 0; i--) {
      const id = `${name}_${i}`;

      const isDisplayFilledStar = hoverRating >= i || (!hoverRating && ratingValue >= i);

      let starIconColor = IconColor.DigitalBlack;
      if (readOnly) {
        starIconColor = IconColor.Support80;
      } else if (disabled) {
        starIconColor = IconColor.DisableLight;
      }

      const starNodeInput = (
        <StyledInput
          key={`input_${id}`}
          type="radio"
          name={name}
          id={id}
          value={i}
          checked={ratingValue === i}
          onChange={() => onChange(i)}
        />
      );

      const starNodeLabel = (
        <StyledLabel
          theme={theme}
          key={`label_${id}`}
          hideCursor={readOnly || disabled}
          data-testid={ratingValue >= i ? `rating-filled-star-${i}` : `rating-empty-star-${i}`}
          htmlFor={id}
          onClick={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarClick(i, ratingValue, name, e)}
          onMouseOver={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarHover(i, e)}
        >
          <StyledIconStarContainer key={`icon_${id}`}>
            {isDisplayFilledStar ? <StarFilled color={starIconColor} /> : <Star color={starIconColor} />}
          </StyledIconStarContainer>
        </StyledLabel>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  };

  return (
    <StyledRatingContainer data-testid={dataTestId} theme={theme} {...props}>
      <Text textStyle={TextStyle.MediumBold} color={TextColor.DigitalBlack} align={TextAlign.Center}>
        {label}
      </Text>
      <StyledMainContainer theme={theme}>
        <StyledStarContainer theme={theme} onMouseLeave={handleStarHoverOut}>
          {renderStars()}
        </StyledStarContainer>
        {totalReview !== undefined && (
          <StyledTotalReviewContainer theme={theme}>
            <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.DigitalBlack}>
              {`(${totalReview})`}
            </Text>
          </StyledTotalReviewContainer>
        )}
      </StyledMainContainer>
    </StyledRatingContainer>
  );
};
