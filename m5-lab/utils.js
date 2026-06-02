import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

// 3. Implement this function to transform the raw data
// retrieved by the getMenuItems() function inside the database.js file
// into the data structure a SectionList component expects as its "sections" prop.
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"
  
  // Define the desired category order for consistent display
  const categoryOrder = ['Appetizers', 'Salads', 'Beverages'];
  
  // Group items by category
  const grouped = {};
  
  data.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push({
      id: item.id || item.uuid,
      title: item.title,
      price: item.price,
    });
  });
  
  // Create sections in the defined order
  const sections = categoryOrder
    .filter((category) => grouped[category] && grouped[category].length > 0)
    .map((category) => ({
      title: category,
      data: grouped[category],
    }));
  
  return sections.length > 0 ? sections : [];
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
