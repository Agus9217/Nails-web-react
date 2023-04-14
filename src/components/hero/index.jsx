import { ButtonsColors } from "../buttons"
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
          <ButtonsColors color='orange'>Uñas</ButtonsColors>
          <ButtonsColors color='orange'>Peluqueria</ButtonsColors>
          <ButtonsColors color='orange'>Tintura</ButtonsColors>
          <ButtonsColors color='orange'>Manos</ButtonsColors>
          <ButtonsColors color='orange'>Pies</ButtonsColors>
          <ButtonsColors color='orange'>Cortes</ButtonsColors>
        </div>
      </div>
      <div className="hero__img">
      </div>
    </div>
  )
}
