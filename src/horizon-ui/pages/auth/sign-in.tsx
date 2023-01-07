/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
// Chakra imports
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Spinner,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
// Custom components
import { HSeparator } from '../../components/separator/Separator';
import DefaultAuthLayout from '../../layouts/auth/Default';
// Assets
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

import { LoginContext } from '../../../contexts/login'

export default function SignIn() {
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorSecondary = 'gray.400';
	const brandStars = useColorModeValue('brand.500', 'brand.400');

	const [ show, setShow ] = React.useState(false);
	const { credentials, loading, setCredentials, submitCredentials } = React.useContext(LoginContext)

	const handleClick = () => setShow(!show);
	const handleEmailChange = (e: React.BaseSyntheticEvent) => {
		setCredentials({
			...credentials,
			email: e.target.value,
		})
	}
	const handlePasswordChange = (e: React.BaseSyntheticEvent) => {
		setCredentials({
			...credentials,
			password: e.target.value,
		})
	}

	return (
		<DefaultAuthLayout illustrationBackground={'../horizon-ui/img/auth/auth.png'}>
			<Flex
				maxW={{ base: '100%', md: 'max-content' }}
				w='100%'
				mx={{ base: 'auto', lg: '0px' }}
				me='auto'
				h='100%'
				alignItems='start'
				justifyContent='center'
				mb={{ base: '30px', md: '60px' }}
				px={{ base: '25px', md: '0px' }}
				mt={{ base: '40px', md: '14vh' }}
				flexDirection='column'>
				<Box me='auto'>
					<Heading color={textColor} fontSize='36px' mb='10px'>
						Sign In
					</Heading>
					<Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
						Enter your email and password to sign in!
					</Text>
				</Box>
				<Flex
					zIndex='2'
					direction='column'
					w={{ base: '100%', md: '420px' }}
					maxW='100%'
					background='transparent'
					borderRadius='15px'
					mx={{ base: 'auto', lg: 'unset' }}
					me='auto'
					mb={{ base: '20px', md: 'auto' }}>
					{/* <Button
						fontSize='sm'
						me='0px'
						mb='26px'
						py='15px'
						h='50px'
						borderRadius='16px'
						bgColor={googleBg}
						color={googleText}
						fontWeight='500'
						_hover={googleHover}
						_active={googleActive}
						_focus={googleActive}>
						<Icon as={FcGoogle} w='20px' h='20px' me='10px' />
						Sign in with Google
					</Button> */}
					<Flex align='center' mb='25px'>
						<HSeparator />
						{/* <Text color='gray.400' mx='14px'>
							or
						</Text> */}
						<HSeparator />
					</Flex>
					<FormControl>
						<FormLabel display='flex' ms='4px' fontSize='sm' fontWeight='500' color={textColor} mb='8px'>
							Email<Text color={brandStars}>*</Text>
						</FormLabel>
						<Input
							isRequired={true}
							variant='auth'
							fontSize='sm'
							ms={{ base: '0px', md: '0px' }}
							type='email'
							// placeholder='email...'
							mb='24px'
							fontWeight='500'
							size='lg'
							value={credentials.email}
							onChange={handleEmailChange}
						/>
						<FormLabel ms='4px' fontSize='sm' fontWeight='500' color={textColor} display='flex'>
							Password<Text color={brandStars}>*</Text>
						</FormLabel>
						<InputGroup size='md'>
							<Input
								isRequired={true}
								fontSize='sm'
								// placeholder='Min. 8 characters'
								mb='24px'
								size='lg'
								type={show ? 'text' : 'password'}
								variant='auth'
								value={credentials.password}
								onChange={handlePasswordChange}
							/>
							<InputRightElement display='flex' alignItems='center' mt='4px'>
								<Icon
									color={textColorSecondary}
									_hover={{ cursor: 'pointer' }}
									as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
									onClick={handleClick}
								/>
							</InputRightElement>
						</InputGroup>
						<Flex justifyContent='space-between' align='center' mb='24px'>
							<FormControl display='flex' alignItems='center'>
								<Checkbox id='remember-login' colorScheme='brandScheme' me='10px' />
								<FormLabel
									htmlFor='remember-login'
									mb='0'
									fontWeight='normal'
									color={textColor}
									fontSize='sm'>
									Keep me logged in
								</FormLabel>
							</FormControl>
							{/* <Link href='/auth/forgot-password'>
								<a>
									<Text color={textColorBrand} fontSize='sm' w='124px' fontWeight='500'>
										Forgot password?
									</Text>
								</a>
							</Link> */}
						</Flex>
						<Button fontSize='sm' variant='brand' fontWeight='500' w='100%' h='50' mb='24px' onClick={submitCredentials}>
							{ loading ? <Spinner /> : "Sign In" }
						</Button>
					</FormControl>
					{/* <Flex flexDirection='column' justifyContent='center' alignItems='start' maxW='100%' mt='0px'>
						<Text color={textColorDetails} fontWeight='400' fontSize='14px'>
							Not registered yet?
							<Link href='/auth/sign-up'>
								<a>
									<Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
										Create an Account
									</Text>
								</a>
							</Link>
						</Text>
					</Flex> */}
				</Flex>
			</Flex>
		</DefaultAuthLayout>
	);
}