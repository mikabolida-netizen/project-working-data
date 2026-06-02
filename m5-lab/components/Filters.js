import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Filters = ({ onChange, selections, sections, onClearFilters }) => {
  const hasActiveFilters = selections.some((selection) => selection === true);

  return (
    <View>
      <View style={styles.filtersContainer}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onChange(index);
            }}
            style={{
              flex: 1 / sections.length,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16,
              backgroundColor: selections[index] ? '#EE9972' : '#495E57',
              borderWidth: 1,
              borderColor: 'white',
            }}
            accessible={true}
            accessibilityLabel={`${section} filter button${
              selections[index] ? ', selected' : ''
            }`}
            accessibilityRole="button"
            accessibilityState={{ selected: selections[index] }}
          >
            <View>
              <Text style={{ color: selections[index] ? 'black' : 'white' }}>
                {section}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {hasActiveFilters && (
        <TouchableOpacity
          onPress={onClearFilters}
          style={styles.clearButton}
          accessible={true}
          accessibilityLabel="Clear all filters"
          accessibilityRole="button"
        >
          <Text style={styles.clearButtonText}>Clear Filters</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  clearButton: {
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#EE9972',
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Filters;
