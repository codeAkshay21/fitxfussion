import { Stack } from "expo-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: " https://chellal.us-east-a.ibm.stepzen.net/api/washing-macaw/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey chellal::local.net+1000::d68394e6c007cc7b45e72c12eaf8eecc49a44927a1be3e8764525104aff78cd8",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack >
        <Stack.Screen name="Exercise" options={{
          presentation: 'fullScreenModal'
        }}/>
        </Stack>
    </ApolloProvider>
  );
};
export default RootLayout;
