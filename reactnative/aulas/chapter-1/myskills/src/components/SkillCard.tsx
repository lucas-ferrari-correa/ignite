import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
};

export function SkillCard({ skill, ...rest }: ISkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
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