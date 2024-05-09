/* eslint-disable prettier/prettier */
import * as React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

import type { PropsWithChildren } from "react";
import { SearchPlayer } from "../api/services";
import { router } from "expo-router";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
}

function Index(): React.JSX.Element {
  const [name, setName] = useState<string>("卿不菜");
  const [testInfo, setTestInfo] = useState<any>("");

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="AOE4会议厅">测试</Section>
          <TextInput onChangeText={(text) => setName(text)} />

          <Button
            title="查询"
            onPress={async () => {
              let json = await SearchPlayer(name);
              if (json.count > 0) {
                let info = JSON.stringify(json.players[0]);
                router.push({
                  pathname: "/profile",
                  params: { info },
                });
              }
            }}
          />
          <Text>{testInfo}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Index;
