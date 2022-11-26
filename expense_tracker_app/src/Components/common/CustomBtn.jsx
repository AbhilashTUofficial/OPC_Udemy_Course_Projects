import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants';

function CustomBtn({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && customBtn.pressed}
            >
                <View style={[customBtn.btn, mode === 'flat' && customBtn.flat]}>
                    <Text style={[customBtn.btnText, mode === 'flat' && customBtn.flatBtnTxt]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CustomBtn;

const customBtn = StyleSheet.create({
    btn: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
    },
    flatBtnTxt: {
        color: GlobalStyles.colors.primary200,
    },
});