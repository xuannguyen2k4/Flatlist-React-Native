import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
  },
];

const NotificationCardComponent1 = ({ title, description, date }) => {
  let icon = 'bell';
  let iconColor = 'blue';
  if (title === 'Bước 1 Xác định nhu cầu khách hàng' || title === 'Công việc sắp đến hạn trong hôm nay' || title === 'Công việc đã quá hạn') {
    icon = 'check-circle';
    iconColor = 'blue'; 
  }
  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={description}
        left={(props) => <Avatar.Icon {...props} icon={icon} style={{backgroundColor:iconColor}} />}
      />
      <Card.Content>
        <Text style={styles.date}>{date}</Text>
      </Card.Content>
    </Card>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" hidden={false} />
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationCardComponent1
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  card: {
    margin: 10,
  },
  date: {
    marginTop: 8,
    color: '#777',
  },
});
