'use client'

import { login, signup } from '@/lib/actions'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'

interface AuthFormProps {
  type: 'login' | 'signup'
}

const AuthForm = ({ ...props }: AuthFormProps) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const header: string = props.type === 'login' ? 'Login' : 'Sign Up'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (props.type === 'signup' && password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      if (props.type === 'login')
        await login(email, password)
      else
        await signup(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>{ header }</h1>
        <Label htmlFor='email'>Email</Label>
        <Input 
          name='email'
          type='text'
          placeholder='Enter your email address'

          value={ email }
          onChange={ e => setEmail(e.target.value) }
          required
        />
        
        <Label htmlFor='password'>Password</Label>
        <Input 
          name='password'
          type='password'
          placeholder='Enter your password'
          
          value={ password }
          onChange={ e => setPassword(e.target.value) }
          required
        />

        { props.type === 'signup' &&
          <>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input 
              name='confirmPassword'
              type='password'
              placeholder='Enter confirm your password'
              
              value={ confirmPassword }
              onChange={ e => setConfirmPassword(e.target.value) }
              required
            />
          </>
        }

        <Button type='submit'>Submit</Button>
    </form>
  )
}

export default AuthForm