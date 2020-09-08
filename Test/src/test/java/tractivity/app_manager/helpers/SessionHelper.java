package tractivity.app_manager.helpers;

import PageObjectModel.ActivitiesPOM;
import org.openqa.selenium.WebDriver;
import tractivity.app_manager.MONCreds;

public class SessionHelper extends HelpersBase {

    public SessionHelper(WebDriver driver) {
        super(driver);
    }

    public void login(MONCreds MONCreds) {
        ActivitiesPOM activitiesPOM = new ActivitiesPOM(driver);
        type(activitiesPOM.userName(), MONCreds.getUsername());
        type(activitiesPOM.password(), MONCreds.getPassword());
        click(activitiesPOM.pingSignInBtn());
    }

}
