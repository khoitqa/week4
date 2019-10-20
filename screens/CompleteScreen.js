import React,{ } from 'react'
import { View,
        StyleSheet} from 'react-native'
import { TODOS }from '../utils/data'  
import TodoItem from '../component/TodoItem'
export default function CompleteScreen(){
    console.log("Active Screen",TODOS)
    return(
        <View style={styles.container}>
            {(TODOS.filter(tod => tod.status === 'Done')).map((todo, idx) => {
                return <TodoItem 
                key={todo.body} 
                todo={todo} 
                idx={idx}
                
                />;
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
      },
  });
  