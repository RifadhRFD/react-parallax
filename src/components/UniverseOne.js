import { Parallax } from 'react-parallax'
import sky1 from '../assets/sky1.jpg'

const UniverseOne = () => (
  
    <Parallax className='image' blur={0} bgImage={sky1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">A Trip to Space</span>
        </div>
    </Parallax>
  
  );

export default UniverseOne
