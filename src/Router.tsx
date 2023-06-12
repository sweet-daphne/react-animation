import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Variants from './routes/Variants';
import Gesture from './routes/Gesture';
import MotionValue from './routes/MotionValue';
import SvgAnimation from './routes/SvgAnimation';
import AniPresence from './routes/AniPresence';
import Slider from './routes/Slider';
import MoveObject from './routes/MoveObject';
import HoverScale from './routes/HoverScale';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/variants">
          <Variants />
        </Route>
        <Route path="/gesture">
          <Gesture />
        </Route>
        <Route path="/motionvalue">
          <MotionValue />
        </Route>
        <Route path="/svganimation">
          <SvgAnimation />
        </Route>
        <Route path="/animatepresence">
          <AniPresence />
        </Route>
        <Route path="/slider">
          <Slider />
        </Route>
        <Route path="/moveobject">
          <MoveObject />
        </Route>
        <Route path="/hoverscale">
          <HoverScale />
        </Route>
        <Route path="/">
          <Variants />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
