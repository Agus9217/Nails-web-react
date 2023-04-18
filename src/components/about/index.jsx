import { BsArrowRightCircle } from 'react-icons/bs'

export const About = () => {
  return (
    <div className="about__container">
      <div className="about__group">
        <div className="about__img-container">
          <div className="about__img">
          </div>
        </div>
        <div className="about__text">
          <span className="about__heading">
            Sobre mi
          </span>
          <h3 className="about__title">
            Descubre tu mejor look conmigo
          </h3>
          <p className="about__text-paragraph">
            Soy una experta en manicuras, tratamientos de uñas, peluquería y todo lo relacionado con el cuidado y embellecimiento de las mujeres. Mi pasión por hacer que las mujeres se sientan seguras y hermosas es lo que me motiva a brindar servicios de alta calidad y personalizados.
          </p>
          <p className="about__catalog">Visita el catálogo <BsArrowRightCircle /></p>
        </div>
      </div>
    </div>
  )
}
