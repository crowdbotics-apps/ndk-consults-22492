import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList170567Navigator from '../features/ArticleList170567/navigator';
import ArticleList170566Navigator from '../features/ArticleList170566/navigator';
import ArticleList170565Navigator from '../features/ArticleList170565/navigator';
import ArticleList1170564Navigator from '../features/ArticleList1170564/navigator';
import BlankScreen1170563Navigator from '../features/BlankScreen1170563/navigator';
import BlankScreen0170562Navigator from '../features/BlankScreen0170562/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList170567: { screen: ArticleList170567Navigator },
ArticleList170566: { screen: ArticleList170566Navigator },
ArticleList170565: { screen: ArticleList170565Navigator },
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
