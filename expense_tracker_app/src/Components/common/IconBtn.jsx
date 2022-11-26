import { Pressable, StyleSheet, View } from 'react-native';
import Icon from './Icon';

function IconBtn({ icon, size, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && iconBtnStyles.pressed}
        >
            <View style={iconBtnStyles.buttonContainer}>
                <Icon icon={icon} size={size} />
            </View>
        </Pressable>
    );
}

export default IconBtn;

const iconBtnStyles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 24,
        marginVertical: 2,
        borderRadius: 24,
        padding: 6,
    },
    pressed: {
        opacity: 0.75,
    },
});