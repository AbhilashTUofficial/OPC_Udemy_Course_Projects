import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants';

const InputField = ({ label, inValid, style, InputFieldConfig }) => {

    const inputStyles = [inputFieldStyles.input];

    if (InputFieldConfig && InputFieldConfig.multiline) {
        inputStyles.push(inputFieldStyles.multiLines);
    }

    if (inValid) {
        inputStyles.push(inputFieldStyles.invalidInput);
    }

    return (
        <View style={[inputFieldStyles.cont, style]}>
            <Text style={[inputFieldStyles.label, inValid && inputFieldStyles.invalidLabel]}>
                {label}</Text>
            <TextInput style={inputStyles} {...InputFieldConfig} />
        </View>
    );
};

export default InputField;

const inputFieldStyles = StyleSheet.create({
    cont: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    multiLines: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
});