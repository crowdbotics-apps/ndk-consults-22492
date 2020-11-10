import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList1170564Navigator from '../features/ArticleList1170564/navigator';
import BlankScreen1170563Navigator from '../features/BlankScreen1170563/navigator';
import BlankScreen0170562Navigator from '../features/BlankScreen0170562/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList1170564: { screen: ArticleList1170564Navigator },
BlankScreen1170563: { screen: BlankScreen1170563Navigator },
BlankScreen0170562: { screen: BlankScreen0170562Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
