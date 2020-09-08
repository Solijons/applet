package tractivity.tests.Activity;

import Model.ActivityTypeData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.util.ArrayList;

public class ActivityDeletions extends TestBase {
    @Test(groups = {"ActivityDeletions", "deleteActivityType"})
    public void deleteActivityType() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();

        ArrayList<String> teams = app.activities().getTeamsList();
        String activityType = "Test activity type";
        String team = teams.get(teams.size() - 1);

        app.activities().createActivityType(new ActivityTypeData()
                .withActivityType(activityType)
                .withTeam(team)
        );

        app.activities().initActivityTypeDeletion(activityType);
        Assert.assertEquals(app.activities().selectedTeam(), team);
        Assert.assertEquals(app.activities().selectedActivityType(), activityType);
        app.activities().delete();
        Assert.assertFalse(app.activities().deleteActivityType(activityType));
    }
}
