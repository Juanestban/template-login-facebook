import CardLogin from '../../Molecules/CardLogin'
import imgSrc from '../../../assets/logo.svg'
import {
  ContainerLogin,
  CenterContainer,
  ContainImg,
  ContainerCardLogin,
} from './styles'

export default function LoginLayout() {
  return (
    <ContainerLogin>
      <CenterContainer>
        <ContainImg>
          <figure>
            <img src={imgSrc} alt="img-facebook" />
          </figure>
          <h2>
            Facebook te ayuda a cominicarte y compartir con las personas que
            forman parte de tu vida
          </h2>
        </ContainImg>
        <ContainerCardLogin>
          <CardLogin />
        </ContainerCardLogin>
      </CenterContainer>
    </ContainerLogin>
  )
}
