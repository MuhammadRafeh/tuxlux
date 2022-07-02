import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Filter from '../../../assets/images/home/filter.svg';
import colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
const cat = ['BEST MATCH', 'TOP RATED', 'PRICE LOW-HIGH', 'PRICE HIGH-LOW']
const HomeScreen = props => {
    const [categ, setCategory] = useState('BEST MATCH');
    return (
        <View style={styles.screen}>
            <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingRight: 20, flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Ionicons name="md-chevron-back-sharp" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Filter />
                </TouchableOpacity>
            </View>
            <View style={{ height: 50, marginTop: 5, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingRight: 20, flexDirection: 'row' }}>
                <ScrollView horizontal contentContainerStyle={{ paddingLeft: 10, alignItems: 'flex-end' }} showsHorizontalScrollIndicator={false}>
                    {
                        cat.map(category => (
                            <TouchableOpacity onPress={() => setCategory(category)}>
                                <Text key={category} style={{ fontWeight: 'bold', marginRight: 20, color: category == categ ? colors.secondary : '#727C8E', fontSize: category == categ ? 16 : 13 }}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    }
})
