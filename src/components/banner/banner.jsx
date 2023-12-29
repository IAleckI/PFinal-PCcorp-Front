import Style from './banner.module.css'
import { Button } from '../Index';

const Banner = () => {
    return (
        <article className={Style.banner}>
            <h2>Ofertas por tiempo limitado</h2>
            <Button 
              text={'VER OFERTAS'} 
              onClick={() => console.log('hola')}/>
        </article>
    )

}

export default Banner;