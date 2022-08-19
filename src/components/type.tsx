import { types } from '../models/pokemon';
import { Text, View, StyleSheet } from 'react-native';

interface TypeProps {
  type: string;
}

export function Type(props: TypeProps) {
  return (
    <View
      className="rounded-md mb-1 py-[2px] px-4"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignSelf: 'flex-start',
      }}
    >
      <Text className="text-white capitalize text-[10px] rounded-xl">
        {props.type}
      </Text>
    </View>
  );
}
