import { useState } from 'react';
import { useSession } from '../../hooks/useSession.jsx'
import Card from '../../components/card/Card.jsx';
import CardHeading from '../../components/card/CardHeading.jsx';
import Title from '../../components/card/Title.jsx';
import Input from '../../components/Input.jsx';
import PrimaryButton from '../../components/button/PrimaryButton.jsx';
import TertiaryButton from '../../components/button/TertiaryButton.jsx';
import api from '../../utils/api.js';
import { useNavigate } from 'react-router-dom';

export default Login = () => {
  const [identifier, setIdentifier] = useState('')
  const [code, setCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { setToken } = useSession();
  const navigate = useNavigate();

  function onSubmitButtonClick(){
    api.login({ username: identifier, password: code })
      .then(response => {
        setToken(response.token)
        navigate('edm-scraper', { replace: true })
      })
      .catch(error => {
        console.error(error.message)
      })
  }
  function onResetButtonClick(){
    setIdentifier('')
    setCode('')
  }

  return (
    <div className='flex flex-col h-screen bg-slate-200'>
      <div className='w-full max-w-5xl'>
        <Card>
          <CardHeading>
            <Title text="Welcome :)" />
          </CardHeading>
          <div>Please login to continue.</div>
        
          <div className='pt-8'>
            <Input 
              placeholder={'who are you?'}
              autoFocus 
              linkText={identifier} 
              onTextChange={(value) => {setIdentifier(value)}} 
            />
          </div>
          <div className='py-3'>
            <Input 
              customClass={'text-xs font-thin'}
              placeholder={'and your secret code?'}
              linkText={code} 
              type={showPassword ? 'text' : 'password'}
              onTextChange={(value) => {setCode(value)}} 
            />
          </div>
          <div className='flex justify-end pt-4'>
            <PrimaryButton 
              handleOnClick={() => onSubmitButtonClick()}
            >
              Submit
            </PrimaryButton>
            <TertiaryButton 
              customClass={'ml-3'}
              handleOnClick={() => onResetButtonClick()}
            >
              Reset
            </TertiaryButton>
          </div>
        </Card>
      </div>
    </div>
  )
}