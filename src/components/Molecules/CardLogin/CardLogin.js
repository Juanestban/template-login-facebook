import { InputLogin } from '../../Atoms/Input'
import { ButtonLogin } from '../../Atoms/Button'
import { ContainerCard, Card, RegisterContainer } from './styles'

export const CardLogin = () => {
  return (
    <ContainerCard>
      <Card>
        <div>
          <div className="formGroup">
            <InputLogin
              type="text"
              placeholder="Correo electrónico o número de teléfono"
            />
          </div>
          <div className="formGroup">
            <InputLogin type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className="containerButton">
          <ButtonLogin>Iniciar sesión</ButtonLogin>
        </div>
        <div className="containerButton" style={{ marginTop: 16 }}>
          <a href="wherver">¿Olvidaste tu contraseña?</a>
        </div>
        <div className="divider"></div>
        <div className="containerButton">
          <ButtonLogin
            style={{ backgroundColor: '#42b72a', width: 190, fontSize: 14 }}
          >
            Crear una cuenta nueva
          </ButtonLogin>
        </div>
      </Card>
      <RegisterContainer>
        <a href="/wherever">Crea una página</a> para un personaje público, un
        grupo de música o un negocio.
      </RegisterContainer>
    </ContainerCard>
  )
}
