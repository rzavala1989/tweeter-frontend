import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';
import { FieldError } from 'react-hook-form';
import { KeyedMutator } from 'swr';

//types vs interfaces
//types are used to define the shape of the data
//interfaces are used to define the behavior of the data (what it looks liek and what it feels like)
export interface IButton {
  title: string;
  color: string;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
}
