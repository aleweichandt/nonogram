// @flow
import { OPTION_VOID, OPTION_BLOCKED } from '../const';
import type { OptionType, OptionsType } from '../types';

const validGroup: OptionsType[] = [
  [OPTION_BLOCKED, OPTION_VOID],
];


export const isValid = (boardOption: OptionType, progressOption: OptionType) => {
  const groupMatcher = group => group.includes(boardOption) && group.includes(progressOption);
  const matches = validGroup.some(groupMatcher);
  return matches || boardOption === progressOption;
};

export const clearValue = () => OPTION_VOID;

export const shouldShowInfo = (option: OptionType) => option !== OPTION_VOID;
