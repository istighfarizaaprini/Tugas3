import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from "react-native";

export default function App() {
    const [LK, setLK] = useState("");
    const [LT, setLT] = useState("");
    const [Tgl, setTgl] = useState("");

    return ( <
        View style = { styles.container } >
        <
        Image style = { styles.image }
        source = {
            { uri: 'https://www.freepik.com/premium-vector/air-plane-icon-illustration_6333241.htm' } }
        />

        <
        StatusBar style = "auto" / >
        <
        View style = { styles.inputView } >
        <
        TextInput text = "AA"
        style = { styles.TextInput }
        placeholder = "Masukkan lokasi Keberangkatan"
        placeholderTextColor = "#003f5c"
        onChangeText = {
            (LK) => setLK(LK) }
        /> <
        /View>

        <
        View style = { styles.inputView } >
        <
        TextInput style = { styles.TextInput }
        placeholder = "Masukkan lokasi tujuan"
        placeholderTextColor = "#003f5c"
        secureTextEntry = { true }
        onChangeText = {
            (LT) => setLT(LT) }
        /> <
        /View>

        <
        View style = { styles.inputView } >
        <
        TextInput style = { styles.TextInput }
        placeholder = "Masukkan tanggal keberangkatan"
        placeholderTextColor = "#003f5c"
        secureTextEntry = { true }
        onChangeText = {
            (Tgl) => setTgll(Tgl) }
        /> <
        /View>

        <
        TouchableOpacity style = { styles.cariBtn } >
        <
        Text style = { styles.cariText } > CARI < /Text> <
        /TouchableOpacity> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0FFF0",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#90EE90",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        width: "90%",
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    cariBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#8FBC8F",
    },

    cariText: {
        color: "#FFFFFF",
    },
});