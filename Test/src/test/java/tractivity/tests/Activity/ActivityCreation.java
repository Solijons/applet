package tractivity.tests.Activity;

import Model.ActivityTypeData;
import Model.NurseryFieldActivityData;
import Model.NurseryFieldData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class ActivityCreation extends TestBase {
    @Test(groups = {"ActivityCreation", "nurseryFieldActivity"})
    public void nurseryFieldActivityCreation() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        if (! app.dashboard().isThereANurseryField()) {
            app.dashboard().createNF(new NurseryFieldData()
                    .withType("MK")
                    .withLocation("SHADEHOUSE")
                    .withPriority("Low")
                    .withPottingDate("10/12/2019")
                    .withForecastDate("10/12/2019")
                    .withSize(32456.00)
                    .withVrcId("5421"));
            app.common().switchToModal();
            String actual = app.common().getDialogText("nf-creation-prompt-title");
            Assert.assertEquals(actual, "Success");
            app.common().closeModal();
        }

        app.goTo().trackActivityPage();
        List<NurseryFieldActivityData> activitiesBefore =  app.activities().getActivitiesList();
        app.goTo().homePage();

        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();

        ArrayList<String> teams = app.activities().getTeamsList();
        app.activities().expandTeam(teams.size() - 1);
        app.activities().selectActivity(teams.get(teams.size() - 1));

        app.activities().fillOutNurseryFieldActivityForm(new NurseryFieldActivityData()
                .withDate(DateTimeFormatter.ofPattern("MM/dd/yyy").format(LocalDate.now()))
                .withComments("Test comments")
                .withStatus("Ok")
                .withContinueingEvent("start")
        );
        app.activities().submitNurseryFieldActivity();

        String actualMsg = app.common().getDialogText("addActivityPrompt-title");
        Assert.assertEquals(actualMsg, "Success");

        app.common().closeModal();
        app.goTo().homePage();
        app.goTo().trackActivityPage();
        List<NurseryFieldActivityData> activitiesAfter =  app.activities().getActivitiesList();
        Assert.assertEquals(activitiesAfter.size(), activitiesBefore.size() + 1);

    }


    @Test(groups = {"ActivityCreation", "activityTypeCreation"})
    public void activityTypeCreation() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();
        ArrayList<String> teams = app.activities().getTeamsList();
        app.activities().initActivityTypeCreation();

        String newActivityType = "Test activity type";

        app.activities().fillOutActivityTypeForm(new ActivityTypeData()
                .withActivityType(newActivityType)
                .withTeam(teams.get(teams.size() - 1))
        );
        app.activities().submitActivityTypeCreation();
        Assert.assertTrue(app.activities().isNewActivityTypeAdded(newActivityType));
    }

    @Test(groups = {"ActivityCreation", "avoidActivityTypeDuplication"})
    public void avoidActivityTypeDuplication() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();

        app.activities().initActivityTypeCreation();
        app.activities().fillOutActivityTypeForm(new ActivityTypeData()
                .withActivityType("Nursery Shipping")
                .withTeam("Seed Processing")
        );

        app.activities().submitActivityTypeCreation();
        String actualMsg = app.common().getDialogText("add-nfe-type-title");
        Assert.assertTrue(actualMsg.contains("Duplicate Found"));
    }



}
