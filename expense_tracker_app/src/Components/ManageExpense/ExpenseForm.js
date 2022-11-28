import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants';
import {FormatDate} from '../../util/FormatDate';
import CustomBtn from '../common/CustomBtn';
import InputField from './InputField';

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitBtnLabel,
  defalutValues: defaultValues,
}) => {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? FormatDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });
  const inputChangeHandler = (indentifier, value) => {
    setInput(currentInput => {
      return {
        ...currentInput,
        [indentifier]: {value: value, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +input.amount.value,
      date: new Date(input.date.value),
      description: input.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInput(curInputs => {
        return {
          amount: {value: curInputs.amount.value, isValid: amountIsValid},
          date: {value: curInputs.date.value, isValid: dateIsValid},
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;

  return (
    <View style={expenseFormStyles.form}>
      <Text style={expenseFormStyles.title}>Your Expense</Text>
      <View style={expenseFormStyles.row}>
        <InputField
          style={{flex: 1}}
          label="Amount"
          inValid={!input.amount.isValid}
          InputFieldConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: input.amount.value,
          }}
        />
        <InputField
          style={{flex: 1}}
          label="Date"
          inValid={!input.date.isValid}
          InputFieldConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: input.date.value,
          }}
        />
      </View>

      <InputField
        label="Description"
        inValid={!input.description.isValid}
        InputFieldConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: input.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={expenseFormStyles.errorMsg}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={expenseFormStyles.btns}>
        <CustomBtn style={expenseFormStyles.btn} mode="flat" onPress={{}}>
          Cancel
        </CustomBtn>
        <CustomBtn style={expenseFormStyles.btn} onPress={submitHandler}>
          {submitBtnLabel}
        </CustomBtn>
      </View>
    </View>
  );
};

export default ExpenseForm;

const expenseFormStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    // textAlign: 'center',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorMsg: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
