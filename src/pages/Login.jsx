import AuthLayout from '../components/templates/AuthLayout'
import LoginForm from '../components/organisms/LoginForm'

export default function Login({ onLogin, onSwitchToRegister }) {
  return (
    <AuthLayout>
      <LoginForm onLogin={onLogin} onSwitchToRegister={onSwitchToRegister} />
    </AuthLayout>
  )
}
