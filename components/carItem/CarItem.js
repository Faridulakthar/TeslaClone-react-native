import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../button/Button';

const carItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn('Custom Order was clicked!');
          }}
        />

        <Button
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn('Existing Inventory was clicked!');
          }}
        />
      </View>
    </View>
  );
};

export default carItem;
