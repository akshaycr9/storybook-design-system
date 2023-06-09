import React from 'react';
import styled, { css } from 'styled-components';
import UserPlaceholderImage from '../../assets/user-avatar-placeholder.svg';
import CompanyPlaceholderImage from '../../assets/company-avatar-placeholder.svg';

interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  src: string;
  isFocused?: boolean;
  type: 'user' | 'company';
}

export const sizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  xxl: 64,
};

const Image = styled.img<AvatarProps>`
  width: 100%;
  height: auto;
  border-radius: 200px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  height: ${sizes.md}px;
  width: ${sizes.md}px;
  line-height: ${sizes.md}px;

  ${(props) =>
    props.size === 'xs' &&
    css`
      height: ${sizes.xs}px;
      width: ${sizes.xs}px;
      line-height: ${sizes.xs}px;
    `}

  ${(props) =>
    props.size === 'sm' &&
    css`
      height: ${sizes.sm}px;
      width: ${sizes.sm}px;
      line-height: ${sizes.sm}px;
    `}

   ${(props) =>
    props.size === 'lg' &&
    css`
      height: ${sizes.lg}px;
      width: ${sizes.lg}px;
      line-height: ${sizes.lg}px;
    `}

   ${(props) =>
    props.size === 'xl' &&
    css`
      height: ${sizes.xl}px;
      width: ${sizes.xl}px;
      line-height: ${sizes.xl}px;
    `}

   ${(props) =>
    props.size === 'xxl' &&
    css`
      height: ${sizes.xxl}px;
      width: ${sizes.xxl}px;
      line-height: ${sizes.xxl}px;
    `}

    ${(props) =>
    props.isFocused &&
    css`
      border: 4px solid #cbcbf4;
    `}

    ${(props) =>
    props.type === 'company' &&
    css`
      border-radius: 4px;
    `}
`;

export function Avatar({ size = 'md', src, isFocused = false, type }: AvatarProps) {
  const image = !src ? (type === 'user' ? UserPlaceholderImage : CompanyPlaceholderImage) : src;
  return <Image type={type} size={size} src={image} isFocused={isFocused} alt='avatar' />;
}
