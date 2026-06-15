import AuthLayout from '../components/templates/AuthLayout'
import RegisterForm from '../components/organisms/RegisterForm'

export default function Register({ onRegister, onSwitchToLogin }) {
  return (
    <AuthLayout>
      <RegisterForm onRegister={onRegister} onSwitchToLogin={onSwitchToLogin} />
    </AuthLayout>
  )
}
