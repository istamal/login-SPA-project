import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from './actions';

const Header = styled.header`
  padding: 40px 0;
  background-color: lightseagreen;
  width: 100%;
  color: #fff;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 10px;
  background-color: #ddd;
  overflow: hidden;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  margin: 0 auto;
`;

const Romb = styled.div`
  width: 200px;
  height: 150px;
  background: #fff;
  margin: 0 auto;
  border-radius: 50%;
  margin-top: 10px;
  background: #fff;
`;

const Container = styled.div`
  width: 65%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: 1px solid #fff;
  border-radius: 3px;
  align-self: flex-start;
  cursor: pointer;
`;

const actionCreators = {
  removeUserName: actions.removeUserName,
  noneRequest: actions.noneRequest,
};

const mapStateToProps = (state) => ({
  userName: state.userName,
});

const Home = (props) => (
  <div>
    <Header>
      <Container>
        <Avatar>
          <Circle />
          <Romb />
        </Avatar>
        <Title>
          Wellcome,
          {' '}
          {props.userName}
          !
        </Title>
        <Button onClick={() => {
          props.noneRequest();
          props.removeUserName();
        }}
        >
          Выход
        </Button>
      </Container>
    </Header>
    <Container>
      <main>
        <h2 className="text-center">Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas molestiae dignissimos
          vel explicabo odio et dolore, amet magni cum
          fugit pariatur. Impedit sapiente quidem, magnam
          aliquid libero laborum numquam ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas molestiae dignissimos
          vel explicabo odio et dolore, amet magni cum
          fugit pariatur. Impedit sapiente quidem, magnam
          aliquid libero laborum numquam ullam.
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas molestiae dignissimos
          vel explicabo odio et dolore, amet magni cum
          fugit pariatur. Impedit sapiente quidem, magnam
          aliquid libero laborum numquam ullam.
        </p>
      </main>
    </Container>
  </div>
);

export default connect(mapStateToProps, actionCreators)(Home);
