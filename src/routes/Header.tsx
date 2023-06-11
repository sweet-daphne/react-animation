import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  width: 140px;
  height: 50px;
  border: 0;
  outline: 0;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Div = styled.div`
  position: absolute;
  top: 20px;
`;

function Header() {
  return (
    <Div>
      <Link to={'/variants'}>
        <Button>Variants</Button>
      </Link>
      <Link to={'/gesture'}>
        <Button>Gesture</Button>
      </Link>
      <Link to={'/motionvalue'}>
        <Button>MotionValue</Button>
      </Link>
      <Link to={'/svganimation'}>
        <Button>SvgAnimation</Button>
      </Link>
      <Link to={'/animatepresence'}>
        <Button style={{ width: '180px' }}>AnimatePresence</Button>
      </Link>
      <Link to={'/slider'}>
        <Button>Slider</Button>
      </Link>
      <Link to={'/moveobject'}>
        <Button>MoveObject</Button>
      </Link>
    </Div>
  );
}

export default Header;
