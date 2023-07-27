import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const items = [
    {
      id: "p1",
      imgUrl:
        "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",

      title: "Eiffel Tower",
      description:
        "The Eiffel Tower, an iconic symbol of France, is a wrought-iron lattice tower located on the Champ de Mars in Paris. Designed by Gustave Eiffel and completed in 1889 for the World's Fair, it was initially criticized but is now one of the world's most visited monuments. Standing at 330 meters tall, it was the world's tallest man-made structure until 1930. The tower offers panoramic views of the city from its three levels, which house restaurants and a champagne bar. Illuminated at night, it sparkles every hour, enhancing the Parisian skyline.",
      address: "228 Rue de l'Université, 75007 Paris, France, Paris",
      location: {
        lat: 48.8598459,
        lng: 2.2937657,
      },
      creator: "u1",
    },
    {
      id: "p2",
      imgUrl:
        "https://images.unsplash.com/photo-1623009070533-593d7b6fc383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80",

      title: "Montmartre",
      description:
        "Montmartre is a historic and artistic neighborhood in Paris, famous for its bohemian past and the iconic Sacré-Cœur Basilica. Perched on the highest hill in the city, it offers stunning views of Paris. Its winding, narrow streets are filled with history, having once been the haunt of artists like Picasso and Van Gogh. Today, it's a vibrant area bustling with cafés, bistros, and studios, where artists still gather at Place du Tertre. Its charm, authenticity, and rich cultural heritage make Montmartre a must-visit Parisian destination.",
      address: "Montmartre, Paris, France",
      location: {
        lat: 48.8862219,
        lng: 2.3275995,
      },
      creator: "u2",
    },
  ];

function UserPlaces() {
  const userId = useParams().userId;
  const loadPlaces = items.filter(place => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
}
export default UserPlaces;
