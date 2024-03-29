import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointment,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './styles';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [])

  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <BackButton 
          onPress={handleBack} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e{'\n'} 
          fim do aluguel
        </Title>

        <Subtitle>
          Conforto, segurança e praticidade
        </Subtitle>
      </Header>

      <Content>
        <Appointment>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointment>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car data={item.car} />
          )}
        />
      </Content>
    </Container>
  );
}