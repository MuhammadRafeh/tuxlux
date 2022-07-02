import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Filter from '../../../assets/images/home/filter.svg';
import GreaterThan from '../../../assets/images/home/greaterThan.svg';
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
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 78, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: colors.secondary, width: 218, height: 47, borderRadius: 23, alignItems: 'center', paddingLeft: 20, justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: 30, fontWeight: 'bold', color: 'white', fontSize: 17 }}>GENERATE IN PDG</Text>
                    <View style={{ marginRight: 5, justifyContent: 'center', alignItems: 'center', width: 34, height: 34, borderRadius: 18, backgroundColor: 'white' }}>
                        <GreaterThan />
                    </View>
                </TouchableOpacity>
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
