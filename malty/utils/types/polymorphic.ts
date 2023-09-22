import { ComponentPropsWithoutRef, ElementType, PropsWithoutRef } from 'react';

export type PolymorphicProps<
  Component extends ElementType,
  PropsOriginalComponent = Record<string, never>
> = PropsWithoutRef<PropsOriginalComponent> & Omit<ComponentPropsWithoutRef<Component>, keyof PropsOriginalComponent>;
