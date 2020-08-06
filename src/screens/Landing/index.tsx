import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
    const navigation = useNavigation();

    function handleNavigateToGiveLessonsScreen() {
        navigation.navigate('GiveLessons');
    }

    function handleNavigateToStudyScreens() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyScreens} 
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon}/>

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]} 
                    onPress={handleNavigateToGiveLessonsScreen}
                >
                    <Image source={giveClassesIcon}/>

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    );
}

export default Landing;