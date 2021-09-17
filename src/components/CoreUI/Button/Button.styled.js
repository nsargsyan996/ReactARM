import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  transition: background-color 200ms ease-out;
  cursor: pointer;
  overflow: hidden;
  border: 0;

  &.large {
    padding: 13px 44px;
    font-size: 16px;
  }

  &.extra {
    padding: 15px 60px;
    font-size: 20px;
  }

  &.medium {
    padding: 9px 28px;
    font-size: 14px;
  }

  &.small {
    padding: 6px 24px;
    font-size: 12px;
  }

  &.primary {
    display: inline-block;
    background-color: rgb(97, 218, 251);
    color: rgb(0, 0, 0);
    white-space: nowrap;
    transition: background-color 0.2s ease-out 0s;

    &:hover {
      background-color: white;
    }
  }

  &.secondary {
    display: inline-block;
    font-size: 16px;
    color: rgb(97, 218, 251);
    background-color: transparent;
    padding: 10px 25px;
    white-space: nowrap;
    transition: background-color 0.2s ease-out 0s;

    &:hover {
      color: white;
    }
  }

  &.loading {
    .button-icon {
      animation: spinner 1s infinite linear;
    }
  }

  .button-effect {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
  }

  .button-text {
    position: relative;
    z-index: 1;
  }

  .button-icon {
    margin-right: 8px;
    display: inline-block;
  }

  @keyframes spinner {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
