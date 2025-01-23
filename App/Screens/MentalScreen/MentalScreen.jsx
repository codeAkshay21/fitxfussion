import { View, Text,StyleSheet , FlatList} from "react-native";
import React from "react";
import YoutubeIframe from 'react-native-youtube-iframe';


const videos = [
  { id: '1', title: ' Manage your mental health ', videoId: 'rkZl2gsLUp4' }, 
  { id: '2', title: 'Look After Your Mental Health', videoId: 'p3uYG17WUig' },
  { id: '3', title: 'Mental Health Wellness', videoId: 'NQcYZplTXnQ' },
  { id: '4', title: 'Theres no shame in taking care of your mental health', videoId: 'BvpmZktlBFs'},
  { id: '5', title: 'Atomic Habits for Mental Health', videoId: 'AOHT-YiOeQA'},
  { id: '6', title: 'Physical and Mental Health', videoId: 'EKEWk4oWmjY'},
  { id: '7', title: 'What Mental Health Is and Why Its Important to Take Care of It? ', videoId: 'tY8NY6CMDFA'},
  { id: '8', title: 'What is Mental Health?', videoId: 'yG0Zj37K5bA'},
  { id: '9', title: '5 Tips to Improve your Mental Health', videoId: 'wOGqlVqyvCM'},
];
const VideoItem = ({ item }) => (
  <View style={styles.videoItem}>
    <Text style={styles.videoTitle}>{item.title}</Text>
    <YoutubeIframe
      height={200} // Height for the iframe
      videoId={item.videoId} // YouTube video ID
      play={false} // Initially not playing
    />
  </View>
);

export default function MentalScreen() {
  return (
    <View>
      <View>
      <Text style={styles.Name}>Mental Health</Text>    
      </View>

      <FlatList 
        data={videos} // List of YouTube videos
        renderItem={({ item }) => <VideoItem item={item} />} // Render function
        keyExtractor={(item) => item.id} // Unique key for each item
      />
    </View>
  );
}



const styles = StyleSheet.create({
Name:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 70,
    padding: 20
},
container: {
  flex: 1,
  padding: 10, // Padding for the entire page
},
videoItem: {
  paddingtop: 10,
  paddingLeft: 10,
  paddingRight: 20,
  borderRadius: 40, // Rounded corners
  marginBottom: 15, // Space between video items
},
videoTitle: {
  fontSize: 18, // Font size for the title
  fontWeight: 'bold', // Bold font for emphasis
  marginBottom: 10, // Spacing between title and iframe
},
})
