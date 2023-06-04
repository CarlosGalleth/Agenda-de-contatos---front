import { styled } from "styled-components";

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap-6);

  width: 40%;
  padding: 20px;

  background-color: white;
  border-radius: var(--radius-1);

  .credentialsBox-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: var(--color-brand-4);
    }

    a {
      color: var(--color-brand-3);
    }
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    flex-direction: row !important  ;
    align-items: center;

    width: 100% !important;

    h2 {
      color: var(--color-brand-4);
    }

    button {
      width: 40px;
      height: 40px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--gap-10);

    label {
      font-weight: 600;
      font-size: 16px;
      color: var(--color-brand-4);
    }

    input {
      height: 40px;
      border-radius: var(--radius-3);
      border: 1px solid var(--color-brand-4);
      color: var(--color-brand-6);
    }

    p {
      font-size: 14px;
      color: #ff7272;
    }
  }

  button {
    width: 100%;
    height: 40px;
    background-color: var(--color-brand-3);
    border-radius: var(--radius-3);
    border: none;
    color: var(--fixed-white);
    font-size: 18px;
    font-weight: 600;
  }

  button:hover {
    background-color: var(--color-brand-3);
    opacity: 85%;
  }
`;
