import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledIconStarContainer,
  StyledInput,
  StyledLabel,
  StyledMainContainer,
  StyledRatingContainer,
  StyledStarContainer
} from './Rating.styled';
import { RatingProps } from './Rating.types';

export const Rating = ({
  name,
  label,
  value,
  editing = true,
  className = '',
  totalReview,
  onStarClick,
  onStarHover,
  onStarHoverOut,
  dataTestId
}: RatingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [ratingValue, seRatingValue] = useState(value);

  const onChange = (inputValue: number) => {
    if (!editing) {
      return;
    }

    seRatingValue(inputValue);
  };

  const handleStarClick = (
    index: number,
    val: number,
    named: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (!editing) {
      return;
    }
    if (onStarClick) {
      onStarClick(index, val, named, e);
    }
  };

  const handleStarHover = (
    index: number,
    val: number,
    named: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (!editing) {
      return;
    }

    if (onStarHover) {
      onStarHover(index, val, named, e);
    }
  };

  const handleStarHoverOut = (
    index: number,
    val: number,
    named: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!editing) {
      return;
    }

    if (onStarHoverOut) {
      onStarHoverOut(index, val, named, e);
    }
  };

  const renderStars = (): JSX.Element[] | null => {
    // populate stars
    const starNodes = [];
    const filledStar = '★';
    const emptyStar = '☆';
    const starCount = 5;

    for (let i = starCount; i > 0; i--) {
      const id = `${name}_${i}`;
      const starNodeInput = (
        <StyledInput
          key={`input_${id}`}
          className="dv-star-rating-input"
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
          editing
          className={`dv-star-rating-star ${
            ratingValue >= i ? 'dv-star-rating-full-star' : 'dv-star-rating-empty-star'
          }`}
          htmlFor={id}
          onClick={(e) => handleStarClick(i, ratingValue, name, e)}
          onMouseOver={(e) => handleStarHover(i, ratingValue, name, e)}
          onMouseLeave={(e) => handleStarHoverOut(i, ratingValue, name, e)}
        >
          <StyledIconStarContainer key={`icon_${id}`}>
            {i <= ratingValue ? filledStar : emptyStar}
          </StyledIconStarContainer>
        </StyledLabel>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  };

  const nonEditableClass = !editing ? 'dv-star-rating-non-editable' : '';
  const classes = `dv-star-rating ${nonEditableClass} ${className}`;

  return (
    <TypographyProvider>
      <StyledRatingContainer data-testid={dataTestId} theme={theme}>
        <Text textStyle={TextStyle.MediumBold} color={TextColor.DigitalBlack}>
          {label}
        </Text>
        <StyledMainContainer>
          <StyledStarContainer className={classes}>{renderStars()}</StyledStarContainer>
          {totalReview !== undefined && (
            <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.DigitalBlack}>
              {`(${totalReview})`}
            </Text>
          )}
        </StyledMainContainer>
      </StyledRatingContainer>
    </TypographyProvider>
  );
};
