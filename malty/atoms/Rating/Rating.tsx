import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  editing = true,
  totalReview,
  onStarClick,
  onStarHover,
  onStarHoverOut,
  dataTestId
}: RatingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [ratingValue, setRatingValue] = useState(value);

  const onChange = (inputValue: number) => {
    if (!editing) {
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

    if (!editing) {
      return;
    }

    onStarClick?.(index, val, named, e);
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

    onStarHover?.(index, val, named, e);
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

    onStarHoverOut?.(index, val, named, e);
  };

  const renderStars = (): JSX.Element[] | null => {
    // populate stars
    const starNodes = [];

    for (let i = 5; i > 0; i--) {
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
          data-testid={ratingValue >= i ? 'rating-filled-star' : 'rating-empty-star'}
          htmlFor={id}
          onClick={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarClick(i, ratingValue, name, e)}
          onMouseOver={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarHover(i, ratingValue, name, e)}
          onMouseLeave={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) =>
            handleStarHoverOut(i, ratingValue, name, e)
          }
        >
          <StyledIconStarContainer key={`icon_${id}`}>
            {i <= ratingValue ? (
              <Icon name={IconName.StarFilled} color={IconColor.DigitalBlack} size={IconSize.Medium} />
            ) : (
              <Icon name={IconName.Star} color={IconColor.DigitalBlack} size={IconSize.Medium} />
            )}
          </StyledIconStarContainer>
        </StyledLabel>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  };

  const nonEditableClass = !editing ? 'dv-star-rating-non-editable' : '';
  const classes = `dv-star-rating ${nonEditableClass}`;

  return (
    <TypographyProvider>
      <StyledRatingContainer data-testid={dataTestId} theme={theme}>
        <Text textStyle={TextStyle.MediumBold} color={TextColor.DigitalBlack} align={TextAlign.Center}>
          {label}
        </Text>
        <StyledMainContainer>
          <StyledStarContainer className={classes}>{renderStars()}</StyledStarContainer>
          {totalReview !== undefined && (
            <StyledTotalReviewContainer>
              <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.DigitalBlack}>
                {`(${totalReview})`}
              </Text>
            </StyledTotalReviewContainer>
          )}
        </StyledMainContainer>
      </StyledRatingContainer>
    </TypographyProvider>
  );
};
