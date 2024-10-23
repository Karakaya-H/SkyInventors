import { Image, StyleSheet, Platform, Button, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hoş Geldin Karakaya!</Text>
        <Text style={styles.subtitle}>Uygulamayı keşfetmek için önce uygulamayı kodla!</Text>
      </View>
      <Button title="Başla" onPress={() => alert('Başla butonuna tıklandı!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1CEDC', // Arka plan rengi
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Başlık rengi
  },
  subtitle: {
    fontSize: 16,
    color: '#fff', // Alt başlık rengi
  },
  reactLogo: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
});
