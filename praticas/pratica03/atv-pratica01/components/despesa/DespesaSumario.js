import { View, Text ,StyleSheet  } from "react-native";

function DespesaSumario({despesas, periodo}) {
    const SomaDespesas = despesas.reduce((total, despesa) => {
        return total + despesa.valor;
    }, 0);

  return (
    <View style={styles.sumarioContainer}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.valor}>R$ {SomaDespesas.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sumarioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
  }});
export default DespesaSumario;