import '@assets/fontawesome/css/all.css';
import type { NameIcon } from "@components/icons/types";
import React from 'react';
export const Icon: React.FC<NameIcon> = ({ name }) => (<i className={name}></i>)