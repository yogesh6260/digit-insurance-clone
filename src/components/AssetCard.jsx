import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AssetCard = ({icon, label, discount, discountLabel}) => {
  return (
    <View style={styles.cardContainer}>
      {discount ? (
        <View style={styles.discountLabel}>
          <Text style={styles.discountText}>{discountLabel}</Text>
        </View>
      ) : null}

      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default AssetCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F6F1F1',
    width: 100,
    height: 130,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  label: {
    color: '#272829',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discountLabel: {
    width: 100,
    height: 20,
    backgroundColor: '#059212',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    borderRadius: 20,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'sans-serif',
  },
});
