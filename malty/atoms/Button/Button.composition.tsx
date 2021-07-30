import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';
import { Button } from './Button';
import { ButtonType } from './Button.types';

export const PrimaryButton = () => <Button buttonType={ButtonType.Primary} text="Primary button" />;

export const SecondaryButton = () => <Button buttonType={ButtonType.Secondary} text="Secondary button" />;

export const FloaterButton = () => <Button buttonType={ButtonType.Floater} icon={IconNamesTypes.ArrowSmallUp} />;

export const LinkButton = () => <Button buttonType={ButtonType.Link}>Link button</Button>;
