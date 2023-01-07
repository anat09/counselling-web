// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { Fingerprint, HorizonLogo } from '../../icons/Icons';
import { HSeparator } from '../../separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Fingerprint h='50px' w='300px' my='20px' color={logoColor} />
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
