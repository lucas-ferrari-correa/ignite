import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform, 
    FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface ISkillData {
  id: string,
  name: string
}

export default function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(skillId: string) {
    setMySkills(oldState => 
      oldState.filter(skill => {
        skill.id !== skillId
      })
    )
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.title}>Welcome, Ferrari</Text>

      <TextInput 
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        onPress={handleAddNewSkill} 
        activeOpacity={0.7} 
        title='Add'
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  }
})