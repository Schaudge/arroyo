import './pipelines.css';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useLinkClickHandler } from 'react-router-dom';
import React from 'react';
import PipelinesTable from '../../components/PipelinesTable';

export function PipelinesIndex() {
  return (
    <Container py="8" flex="1">
      <Stack spacing={{ base: '8', lg: '6' }}>
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
        >
          <Stack spacing="1">
            <Heading size="sm" fontWeight="medium">
              Pipelines
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Button variant="primary" onClick={useLinkClickHandler('/pipelines/new')}>
              Create Pipeline
            </Button>
          </HStack>
        </Stack>
        <Box
          bg="bg-surface"
          boxShadow={{ base: 'none', md: useColorModeValue('sm', 'sm-dark') }}
          borderRadius="lg"
        >
          <Stack spacing={{ base: '5', lg: '6' }}>
            <PipelinesTable />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
