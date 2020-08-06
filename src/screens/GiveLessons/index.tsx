import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveLessons() {

    function handleNavigateToProffyWeb() {
        Linking.openURL('https://proffy-nlw-02.netlify.app');
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain' 
                source={giveClassesBackgroundImage} 
                style={styles.content}
            >
            
            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>

            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateToProffyWeb}>
                <Text style={styles.okButtonText}>Me cadastrar</Text>
            </RectButton>
        </View>
    );
}

export default GiveLessons;