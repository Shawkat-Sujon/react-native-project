import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';


export default class Example extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        items: [
          {
            title: 'Rent',
            data: [
              { name: 'Vehicle', code: '#1abc9c' }, { name: 'Electronics', code: '#2ecc71' },
              
            ]
          },
          {
            
            data: [
              { name: 'Furniture', code: '#8e44ad' }, { name: 'Mobile', code: '#2c3e50' },
              
            ]
          },
          {
            
            data: [
              { name: 'Sports', code: '#2980b9' }, { name: 'Pets', code: '#95a5a6' }, 
            ]
          }
        ]
      };
    }
  
    render() {
      return (
        <SuperGridSectionList
          itemDimension={130}
          sections={this.state.items}
          style={styles.gridView}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={{ color: 'green' }}>{section.title}</Text>
          )}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });