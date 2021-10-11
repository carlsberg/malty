import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';
import { Button } from './Button';
import { ButtonStyle } from './Button.types';

export const PrimaryButton = () => <Button style={ButtonStyle.Primary} text="Primary button" />;

export const SecondaryButton = () => <Button style={ButtonStyle.Secondary} text="Secondary button" />;

export const FloaterButton = () => <Button style={ButtonStyle.Floater} icon={IconNamesTypes.ArrowSmallUp} />;

export const LinkButton = () => <Button style={ButtonStyle.Link}>Link button</Button>;
