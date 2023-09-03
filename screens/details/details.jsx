import { Image, StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Details = ({route}) => {
  const { dish } = route.params;

  return (
    <SafeAreaView style={detailsStyles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={detailsStyles.img_container}>
        <Image source={{ uri: dish.image_url }} style={detailsStyles.img} />
      </View>
      <View style={detailsStyles.info}>
        <View style={detailsStyles.name_rating_container}>
          <Text style={detailsStyles.main_font}>{dish.dish_name}</Text>
          <View style={detailsStyles.rating_container}>
            <Image
              source={require("../../assets/star.png")}
              style={detailsStyles.star}
            />
            <Text style={detailsStyles.rating}>{dish.rating}</Text>
          </View>
        </View>
        <Text style={detailsStyles.price}>{dish.price} €</Text>
        <View style={detailsStyles.about}>
          <Text style={detailsStyles.main_font}>About</Text>
          <Text style={detailsStyles.description}>{dish.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const detailsStyles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: "100%",
    height: "100%",
  },
  info: {
    padding: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  img_container: {
    width: "100%",
    height: 200,
    marginTop: -28
  },
  name_rating_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  main_font: {
    fontWeight: "bold",
    fontSize: 20
  },
  price: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#F65F00",
  },
  description: {
    fontWeight: "500",
    fontSize: 17,

    color: "gray",
  },
  about: {
    justifyContent: "space-between",
    gap: 10,
  },
  star: {
    width: 20,
    height: 20,
  },
  rating_container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
  },
  rating: {
    fontSize: 17,
    fontWeight: "500",
    color: "#F65F00",
  },
});

export default Details;
