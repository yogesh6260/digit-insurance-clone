import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import Carousel from '../../components/CustomCarousel/Carousel';
import Banners from '../../data/homeBanner';
import Category from '../../data/category';
import CategoryItem from '../../components/CategoryItem';
import Product from '../../data/featuredAssets';
import AssetCard from '../../components/AssetCard';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header  Start*/}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profile}>
          <Image
            source={require('../../assets/avatar.jpeg')}
            style={styles.avatar}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/logo-transparent.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/bell.png')}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/* Header End */}
      {/* Pending Task  */}
      <DropShadow style={styles.shadowProps}>
        <View style={styles.taskContainer}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../../assets/avatar.jpeg')}
              style={styles.taskAvatar}
              resizeMode="contain"
            />
            <View style={styles.taskPer}>
              <Text style={styles.per}>0%</Text>
            </View>
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.task}>Your Profile is Incomplete.</Text>
            <Text style={styles.action}>Complete Now</Text>
          </View>
        </View>
      </DropShadow>
      {/* Pending Task End  */}
      {/* Carousel  */}
      <View>
        <Carousel
          data={Banners}
          itemHeight={300}
          bottomHeight={120}
          dotSize={5}
        />
      </View>
      {/* Carousel End */}
      {/* Categories  */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={Category}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <CategoryItem key={index} item={item} />
          )}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingHorizontal: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          pagingEnabled={false}
        />
      </View>
      {/* Categories End */}
      {/* Featured  Assets*/}
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredContainerHeading}>
          Protect what you Love Today!
        </Text>
        <View style={styles.featuredContent}>
          {Product.map(({id, title, img, discount, discountLabel}) => {
            return (
              <AssetCard
                icon={img}
                key={id}
                label={title}
                discount={discount}
                discountLabel={discountLabel}
              />
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={() => navigation.navigate('product')}>
          <Text style={styles.viewAllBtnText}>View all Products</Text>
          <Image
            source={require('../../assets/right.png')}
            style={{width: 18, height: 18, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>

      {/* Carousel -> Margin, Height  Issue */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    height: 35,
    paddingHorizontal: 20,
  },
  profile: {
    width: 25,
    height: 25,
    borderRadius: 12,
    padding: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 70,
    height: 70,
  },
  icon: {
    width: 30,
    height: 30,
  },
  taskContainer: {
    display: 'flex',
    paddingHorizontal: 5,
    alignSelf: 'center',
    marginTop: 35,
    borderColor: 'lightgray',
    borderWidth: 0.8,
    elevation: 0.8,
    borderRadius: 15,
    width: '90%',
    height: 100,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  taskAvatar: {
    width: 70,
    height: 70,
  },
  taskPer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFB200',
    borderWidth: 1,
    backgroundColor: 'white',
    width: 40,
    height: 15,
    borderRadius: 20,
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    marginLeft: 15,
  },
  per: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'black',
  },
  taskContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },
  task: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  action: {
    color: '#FFB200',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowProps: {
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  categoryContainer: {
    marginTop: 0,
  },
  featuredContainer: {
    marginHorizontal: 10,
    marginVertical: 30,
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  featuredContainerHeading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  featuredContent: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  viewAllBtn: {
    marginVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    width: 170,
    alignSelf: 'center',
    padding: 10,
  },
  viewAllBtnText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
