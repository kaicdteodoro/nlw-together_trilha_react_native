import React from "react";
import { styles } from './style';
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";

export function Profile() {

    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/kaicdteodoro.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );

}