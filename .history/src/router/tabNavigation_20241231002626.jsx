function TabNavigatior() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ThemeColors.BLACK, // Siyah arka plan
          shadowColor: 'transparent', // Çizgiyi kaldırır
          elevation: 0, // Çizgi kaldırma için
        },
        headerTintColor: ThemeColors.WHITE,
        tabBarStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        tabBarActiveTintColor: ThemeColors.WHITE,
        tabBarInactiveTintColor: ThemeColors.WHITE,
      }}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={NEWHOT} component={NewHot} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
}
