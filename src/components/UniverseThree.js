import { Parallax } from 'react-parallax'
import sky3 from '../assets/sky3.jpg'

const UniverseThree = () => (
  
    <Parallax className='image' blur={0} bgImage={sky3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">A Trip to Space</span>
        </div>
    </Parallax>
  
  );

export default UniverseThree
