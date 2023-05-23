import { styled } from "styled-components";

export const CredentialsBackground = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    to right bottom,
    var(--color-brand-1),
    var(--color-brand-2)
  );

  display: flex;
  justify-content: center;
  align-items: center;

  .credentialsBox {
    display: flex;
    flex-direction: column;
    gap: var(--gap-6);

    width: 40%;
    padding: 20px;

    background-color: white;
    border-radius: var(--radius-1);
    box-shadow: 0px 0px 100px var(--color-brand-3);

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
  }
`;
