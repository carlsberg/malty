import { Button } from '@carlsberggroup/malty.atoms.button';
import { Icon, IconColors, IconNamesTypes, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import React from 'react';
import { ModalProps } from './ModalProps.types';

export const Modal = ({ open, setOpen }: ModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      {open ? (
        <>
          <Overlay />
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '560px',
                height: '350px',
                display: 'block',
                backgroundColor: '#fff',
                textAlign: 'center',
                padding: '104px 60px 60px',
                position: 'relative'
              }}
            >
              <div onClick={closeModal} style={{ cursor: 'pointer', position: 'absolute', top: 66, right: 66 }}>
                <Icon name={IconNamesTypes.Close} size={IconSizesTypes.Large} color={IconColors.Primary} />
              </div>
              <Icon name={IconNamesTypes.ItemCheck} size={IconSizesTypes.Large} color={IconColors.Primary} />
              <h1>Modal</h1>
              <p>dsdklsa askdjaskld jas la ladksjd lkasjdlkasd aljd ad djakd aldj alk jlaks jlkas akl jasl kj</p>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                  height: 132
                }}
              >
                <Button style="secondary">Cancel</Button>
                <Button style="primary">Confirm selection</Button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
