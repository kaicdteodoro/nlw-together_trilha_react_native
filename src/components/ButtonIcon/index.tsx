import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from "react-native";
import { styles } from './style';
import DiscordImg from '../../assets/discord.png'

type Props = {
    title: string;
}
export function ButtonIcon({ title }: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}