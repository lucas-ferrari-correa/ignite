import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity 
      //key={mySkills.indexOf(skill)}
      key="1"
      style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        skill
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 15
  },

  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})