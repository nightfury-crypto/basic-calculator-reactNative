import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const statusHeight = StatusBar.currentHeight
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function CalculatorUi() {

    const [inputshow, setInputShow] = useState('')
    const [historyshow, setHistoryShow] = useState('')
    const [symbolshow, setSymbolShow] = useState('')

    // all clear function
    const handleallclear = () => {
        setHistoryShow('')
        setInputShow('')
    }
    // backspace
    const handlebackspace = () => {
        if (inputshow.length < 1) {
            return
        }
        return setInputShow(inputshow.toString().slice(0, inputshow.length - 1))
    }
    // calculate
    const handlecalcu = (expression) => {
        const operatorscheck = ['+', '*', '/', '%', '^', '-']

        // cannot use operators without any number entered except minus "-"
        if (operatorscheck.includes(expression) && inputshow.length < 1 && expression !== '-') {
            return;
        }

        let laststr = inputshow.toString().split("")

        if (operatorscheck.includes(laststr[laststr.length - 1]) && operatorscheck.includes(expression)) {
            return setInputShow(inputshow.toString().slice(0, inputshow.length - 1) + expression)
        }

        return setInputShow(inputshow + expression)
    }

    // result
    const handleresult = () => {
        setHistoryShow(inputshow)
        if (eval(inputshow) === 0) {
            return setInputShow('')
        }
        return setInputShow(eval(inputshow))
    }

    return (
        <View style={styles.container}>
            <View style={{ height: statusHeight + 20 }} />
            <Text style={styles.calcuheading}>CALCULATOR</Text>
            {/* <View style={{}} /> */}

            <View style={styles.calcmain}>
                <View style={styles.inputfieldview}>
                    <Text style={styles.topTextInput}>{historyshow}</Text>
                    <Text style={[styles.inputfield, { color: '#fff' }]}>{inputshow ? inputshow : 0}</Text>
                </View>

                <View style={styles.calculatorBtns}>
                    {/* clear button */}
                    <TouchableOpacity style={[styles.buttons]} onPress={handleallclear}>
                        <Text style={styles.buttonsTitle}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("%")}>
                        <Text style={styles.buttonsTitle} >%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons]} onPress={handlebackspace}>
                        <Ionicons name="backspace-sharp" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsSide]} onPress={() => handlecalcu("/")}>
                        <Text style={styles.buttonsTitle} >&divide;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("7")}>
                        <Text style={styles.buttonsTitle} >7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("8")}>
                        <Text style={styles.buttonsTitle} >8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("9")}>
                        <Text style={styles.buttonsTitle} >9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsSide]} onPress={() => handlecalcu("*")}>
                        <Text style={styles.buttonsTitle} >&times;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("4")}>
                        <Text style={styles.buttonsTitle} >4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("5")}>
                        <Text style={styles.buttonsTitle} >5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("6")}>
                        <Text style={styles.buttonsTitle} >6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsSide]} onPress={() => handlecalcu("-")}>
                        <Text style={[styles.buttonsTitle, { marginTop: -15 }]}>_</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("1")}>
                        <Text style={styles.buttonsTitle} >1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("2")}>
                        <Text style={styles.buttonsTitle} >2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu("3")}>
                        <Text style={styles.buttonsTitle}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsSide]} onPress={() => handlecalcu("+")}>
                        <Text style={styles.buttonsTitle} >+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.buttonsTitle}>^</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons]} onPress={() => handlecalcu("0")}>
                        <Text style={styles.buttonsTitle} >0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => handlecalcu(".")}>
                        <Text style={styles.buttonsTitle} >.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttons, styles.buttonsSide, { backgroundColor: '#68B984' }]}
                        onPress={handleresult}>
                        <Text style={[styles.buttonsTitle, { color: 'black' }]}>=</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    calcuheading: {
        fontSize: 16,
        letterSpacing: 4,
        fontWeight: '700',
        borderBottomColor: '#9C254D',
        borderBottomWidth: 2,
        paddingBottom: 4,
        color: '#fff'
    },
    calcmain: {
        flex: 1,
        width: '100%',
        height: 200,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        bottom: height / 2 + 16
    },
    inputfieldview: {
        width: '100%',
        height: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        color: '#fff',
    },
    inputfield: {
        flex: 1,
        width: '100%',
        fontSize: 32,
        textAlign: 'right',
        paddingHorizontal: 5,

    },
    topTextInput: {
        flex: 0.6,
        textAlign: 'right',
        paddingHorizontal: 5,
        fontSize: 20,
        color: 'grey'
        // borderBottomColor: 'lightgrey',
        // borderBottomWidth: 1,
    },
    calculatorBtns: {
        width: width,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    buttons: {
        width: width / 4 - 4,
        height: width / 4 - 4,
        margin: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#181D31',
        padding: 10,
        position: 'relative',
        borderRadius: 30,
        elevation: 20
    },

    buttonsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#fff',

    },
    buttonsSide: {
        borderRadius: 100,
        width: width / 4 - 25,
        height: width / 4 - 25,
        backgroundColor: '#9C254D',

    }
})