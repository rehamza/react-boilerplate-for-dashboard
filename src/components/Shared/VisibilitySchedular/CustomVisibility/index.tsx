import { BoxComponent, TypographyComponent } from '../../../UILib';
import TabsButtonComponet from '../../Button/TabsButton';
import ToggleButtonComponent from '../../Button/ToggleButton';
import DefaultRadioComponent from '../DefaultRadio';
import ButtonComponent from '../../Button';
import React, { useState } from 'react';
import VisibilityScheduler from '../Visibility';
import { IVisibility, IScheduling } from '../../../../types/MenuManager/menu';
import { style } from './cutomvisibility.style';
import SwitchButton from '../../Button/SwitchButton';

interface CustomVisibilityprops {
  state: IVisibility[];
  setState: React.Dispatch<IVisibility[]>;
  handleCloseModal: () => void;
  hanldeSaveSettings: () => void;
}

export default function CustomVisibility({
  state,
  setState,
  handleCloseModal,
  hanldeSaveSettings,
}: CustomVisibilityprops) {
  const [selectedTab, setSelectedTab] = useState('Pos');

  const handleToggleChange = (index: number, isDefault: boolean) => {
    const updatedState = [...state];
    updatedState[index] = {
      ...updatedState[index],
      isDefault: !isDefault,
    };
    setState(updatedState);
  };

  const handleChangeCustomSettings = (index: number, isVisible: boolean) => {
    const updatedState = [...state];
    updatedState[index] = {
      ...updatedState[index],
      isVisible: !isVisible,
    };
    setState(updatedState);
  };

  const handleChangeDevice = (name: string, index: number) => {
    setSelectedTab(name);
  };

  const handleVisibilitySchedule = (array: IScheduling[]) => {
    const index = state.findIndex((tab: IVisibility) => tab.device === selectedTab);

    if (index !== -1) {
      const updatedState = [...state];
      updatedState[index] = {
        ...updatedState[index],
        scheduling: array,
      };
      setState(updatedState);
    }
  };

  return (
    <>
      <TabsButtonComponet state={state} handleChangeDevice={handleChangeDevice} selectedTab={selectedTab} />
      {state.map((row: IVisibility, index: number) => (
        <>
          {selectedTab === row.device && (
            <BoxComponent sx={style.container}>
              <BoxComponent sx={style.channelVisibilityContainer}>
                <BoxComponent>
                  <TypographyComponent sx={style.channelVisibilityText}>
                    {row.device} Channel Visibility
                  </TypographyComponent>
                </BoxComponent>
                <BoxComponent>
                  <SwitchButton
                    checked={row.isVisible}
                    onChange={() => handleChangeCustomSettings(index, row.isVisible)}
                  />
                </BoxComponent>
              </BoxComponent>

              {row.isVisible ? (
                <>
                  <ToggleButtonComponent
                    selectedOption={row.isDefault}
                    handleToggleChange={() => handleToggleChange(index, row.isDefault)}
                  />

                  {row.isDefault ? (
                    <DefaultRadioComponent isDefault={row.isDefault} />
                  ) : (
                    <VisibilityScheduler visibilityData={row} handleChange={handleVisibilitySchedule} />
                  )}
                </>
              ) : (
                ''
              )}
              <BoxComponent sx={style.buttonContainer}>
                <ButtonComponent text="Cancel" variant="outlined" onClick={handleCloseModal} />
                <ButtonComponent text="Save" variant="contained" onClick={() => hanldeSaveSettings()} />
              </BoxComponent>
            </BoxComponent>
          )}
        </>
      ))}
    </>
  );
}
