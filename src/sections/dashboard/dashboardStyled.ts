import { styled } from "styled-components";

export const DashboardBackgroundStyled = styled.div`
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

  .container {
    width: 80%;
    height: 95vh;

    display: flex;
    flex-direction: column;
    gap: var(--gap-8);
  }
`;

export const UserInfoBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--fixed-white);
  border-radius: var(--radius-1);
  box-shadow: 0px 0px 10px var(--color-brand-3);
  padding: 5px;

  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: var(--radius-1);
  }

  .userInfoBox {
    width: 100%;
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;

    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: space-between;
        width: 300px;

        p {
          font-size: 14px;
          color: var(--color-brand-4);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          color: var(--color-brand-3);
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          white-space: nowrap;
        }
      }
    }

    .anchorBox {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: var(--gap-8);

      width: 100%;

      span {
        cursor: pointer;
        text-decoration: underline;
        color: var(--color-brand-3);
        font-weight: 600;
      }
    }
  }
`;

export const ContactsTitleBar = styled.div`
  width: 100%;
  border-radius: var(--radius-1);
  background-color: var(--fixed-white);
  box-shadow: 0px 0px 10px var(--color-brand-3);
  padding: 0 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 22px;
    font-weight: 600;
    color: var(--color-brand-4);
  }

  span {
    cursor: pointer;
    color: var(--color-brand-3);
    text-decoration: underline;
    font-weight: 600;
    white-space: nowrap;
  }
`;

export const UserContacts = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  background-color: var(--fixed-white);
  border-radius: var(--radius-1);
  box-shadow: 0px 0px 10px var(--color-brand-3);
  padding: 10px;
  overflow-y: scroll;
`;

export const ContactStyled = styled.li`
  width: 49%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: var(--radius-1);
  box-shadow: 0px 0px 2.5px var(--color-brand-4);
  padding: 10px;

  display: flex;
  gap: var(--gap-10);

  .contact {
    display: flex;
    align-items: center;
    gap: var(--gap-10);

    img {
      width: 50px;
      height: 50px;
      border-radius: var(--radius-1);
    }

    .contactInfo {
      width: 80%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      gap: var(--gap-9);

      p {
        font-size: 14px;
        color: var(--color-brand-4);
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    gap: var(--gap-10);

    button {
      width: 100%;
      border: none;
      font-size: 15px;
      font-weight: 600;
      border-radius: var(--radius-3);
      color: var(--fixed-white);
      padding: 3px;
    }

    .updateContact {
      background-color: var(--color-brand-3);
    }

    .deleteContact {
      background-color: #ff7272;
    }
  }
`;

export const UpdateModalStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #00000030;

  display: flex;
  justify-content: center;
  align-items: center;

  .deleteAccount {
    button {
      background-color: #ff7272;
    }
  }
`;
