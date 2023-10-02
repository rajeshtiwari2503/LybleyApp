import React, { useEffect, useState } from 'react'
import { Box, Text, VStack, ScrollView, View, Heading, Flex } from 'native-base'
import httpCommon from '../../http-common';
import { useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Logo from './Logo';

const CompletedComplaint = () => {
  const [complaint, setComplaint] = useState([]);

  const [data, setData] = useState({});

  const getItemSync = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const loginData = JSON.parse(value);
        setData(loginData);
        return loginData;
    } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
    }
};
useEffect(() => {
    const dataPromise = getItemSync("logData");
    dataPromise.then((data) => {
        if (data !== null) {
            const user = data;
        }
    });
}, []);
const id = data?._id

  const getComplaints = async () => {
    try {
      let response = await httpCommon.get(`/getComplaintByUser/${id}`);
      let { data } = response;
      setComplaint(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getComplaints()
  }, [])

console.log(complaint);
  const tableHead = ['SR. No', 'Appliances Name','Part Name', 'Description','CreatedAt'];
  const tableData = complaint?.map((item ,i)=> [i+1, item?.applianceName, item?.partName,item?.description,new Date(item?.createdAt).toLocaleDateString()]);
 
  return (
    <ScrollView flex={1} bg={"amber.100"}>
      <Box flexWrap={"wrap"} >
        <Box w="full" h="full" px="6" justifyContent="center"  >
          <VStack space={2}  >
            <Logo />
            <View mt={5}>
              <Heading textAlign={"center"}>  Complaints </Heading>
            </View>
            <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              style={[styles.row, index % 2 === 1 && { backgroundColor: '#f2f2f2' }]}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </View>
            
            
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default CompletedComplaint;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#b6e6fa' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: 'white' },
});