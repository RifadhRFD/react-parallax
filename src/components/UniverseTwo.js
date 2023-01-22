import { Parallax } from 'react-parallax'
import sky2 from '../assets/sky2.jpg'

const UniverseTwo = () => (
  
    <Parallax className='image' blur={0} bgImage={sky2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">A Trip to Space</span>
        </div>
    </Parallax>
  
  );

export default UniverseTwo
