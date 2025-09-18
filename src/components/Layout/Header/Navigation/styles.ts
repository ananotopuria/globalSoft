// import styled from "styled-components";

// export const Nav = styled.nav`
//   ul {
//     display: flex;
//     justify-content: space-between;
//     gap: 4rem;
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     width: 60rem;
//   }

//   a {
//     text-decoration: none;
//     font-size: 1.6rem;
//     color: #333;
//     font-weight: 500;
//     transition: color 0.2s ease-in-out;

//     &:hover {
//       color: #fe3b1f;
//     }

//     &.active {
//       color: #fe3b1f;
//     }
//   }
// `;

import styled from "styled-components";

export const DesktopNav = styled.nav`
  /* hide on mobile; show on ≥1080px */
  display: none;

  @media (min-width: 1080px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60rem;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #333;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #fe3b1f;
    }

    &.active {
      color: #fe3b1f;
    }
  }
`;
