import { Image, StyleSheet, Text, View } from "react-native";
export default function Details({dish}) {
  return (
    <View style={detailsStyles.container}>
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
    </View>
  );
}
const detailsStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name_rating_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  main_font: {
    fontWeight: "bold",
    fontSize: 20,
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
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 10,
  },
  star: {
    width: 20,
    height: 20,
  },
  rating_container: {
    display: "flex",
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
