const weather = "sunny"; // Possible values: "sunny", "rainy", "snowy", "cloudy", "windy"

switch (weather) {
    case "sunny":
        console.log("Wear sunglasses and light clothes.");
        break;
    case "rainy":
        console.log("Take an umbrella and wear a raincoat.");
        break;
    case "snowy":
        console.log("Wear a warm coat, hat, and gloves.");
        break;
    case "cloudy":
        console.log("It might rain, take a jacket.");
        break;
    case "windy":
        console.log("Wear something warm to stay comfortable.");
        break;
    default:
        console.log("Weather condition is unknown, be prepared for anything!");
}
