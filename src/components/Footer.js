import React from 'react';
import styled from 'styled-components';
import GithubIcons from './GithubIcons';

import ProductHunt from './ProductHunt';
import { connect } from 'react-redux';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  .icons {
    margin-bottom: 0.4rem;
    & > span:first-child {
      margin-right: 0.4rem;
    }
  }
  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 0.6rem;
  }
`;
const Footer = ({ lang }) => {
  return (
    <Wrapper>
      <ProductHunt />
      <p className="icons">
        <GithubIcons />
      </p>
      <h1>{lang.header} © Tristan</h1>
      <h2>
        {lang.inspired}
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/davinci/pen/yVZapY">
          Brainymo
        </a>
      </h2>
    </Wrapper>
  );
};
const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Footer);
