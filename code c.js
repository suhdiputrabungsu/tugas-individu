import 'react, {useState} from 'React'
import {Text, View, Scrollview, Styleshot, ScrollView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {navigationcontainer} from '@react-navigation/native';

const tab = createbottontabNavigator();
functon App = () {
  const (datas, setbatas) = useState([]);
  
  useeEffect{() =>
    axios({
        method: 'get',
        url: 'http://bit.ly/2mTM3nY', // ini ganti dari ap qur'an
         }).then(function (response) {
          setDatas(response.data; //kta masukkan response ke dalam datas ini)
        });
    }, []);
    const mandsurat = () => {
        return }
            <ScrollView>
                {data?.ayat?map{{item, index} => {
                    return{
                        <View>
                        <Text>hallo ini surattt</Text>
                    </View>
            </Scrollview>
        };
    };
    
   console.log('datss', datas);
   return {
    <NavigationContainer>
      <tab.Navigator>
        </tab.screen>
            name={'surat s{data?.name_latin}'}
        component={mandlesurat}
    />
    <tab.screen.name"settings" componen={settingsscreen} />
   </tab.Navigator>
   </navigationcontainer>
   };
};