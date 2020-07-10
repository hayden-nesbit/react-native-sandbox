import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


const RestaurantItem = (props) => {
    return (
        <TouchableOpacity style={styles.RestaurantItem}>
            <View style={styles.RestaurantItemView}>
                <Text style={styles.RestaurantItemText}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    RestaurantItem: {

    },
    RestaurantItemView: {

    }
});

export default RestaurantItem;