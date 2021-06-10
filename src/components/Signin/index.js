import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Cadastre uma nova conta</FormH1>
              <FormLabel htmlFor="for">E-mail</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Cadastrar</FormButton>
              <Text>Esqueceu a senha?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> 
    </>
  )
}

export default SignIn
