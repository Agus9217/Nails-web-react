import { OrangeButton } from "../buttons"
import { FiCornerRightDown } from 'react-icons/fi'


export const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__text-container">
        <h1 className="hero__title">
          Realza tu belleza femenina
        </h1>
        <span className="hero__catalog">Nuestro Catálogo <FiCornerRightDown /></span>
        <div className="hero__buttons-group">
          <OrangeButton>Para Uñas</OrangeButton>
          <OrangeButton>Para Uñas</OrangeButton>
          <OrangeButton>Para Uñas</OrangeButton>
          <OrangeButton>Para Uñas</OrangeButton>
          <OrangeButton>Para Uñas</OrangeButton>
          <OrangeButton>Para Uñas</OrangeButton>
        </div>
      </div>
      <div className="hero__img">
      </div>
    </div>
  )
}
